import Anthropic from '@anthropic-ai/sdk';
import { SYSTEM_PROMPT, buildUserPrompt, parseRequest } from './prompt';

const MODEL = process.env.VEIL_MODEL || 'claude-opus-5-5';
// Four short lines — low effort keeps it quick.
const EFFORT = (process.env.VEIL_EFFORT || 'low') as 'low' | 'medium' | 'high';

let client: Anthropic | null = null;

/**
 * POST /api/reading — streams "The heart of it" (four lines) as plain UTF-8 text.
 * Response header `x-veil-frame` carries the narrative frame used, so the
 * client can avoid repeating it (sessionStorage `veil_last_frames`).
 */
export async function handleReading(request: Request): Promise<Response> {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: 'no_api_key' }, { status: 503 });
  }

  const body = parseRequest(await request.json().catch(() => null));
  if (!body) return Response.json({ error: 'bad_request' }, { status: 400 });

  const { prompt, frame } = buildUserPrompt(body);
  client ??= new Anthropic();

  const stream = client.beta.messages.stream({
    model: MODEL,
    max_tokens: 4000,
    output_config: { effort: EFFORT },
    // If a safety classifier declines, re-run on Anthropic's recommended fallback model.
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
  });

  const encoder = new TextEncoder();
  const body$ = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === 'refusal') throw new Error('refusal');
        controller.close();
      } catch (err) {
        console.error('[veil] reading failed:', err instanceof Error ? err.message : err);
        controller.error(err);
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body$, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-veil-frame': frame,
    },
  });
}
