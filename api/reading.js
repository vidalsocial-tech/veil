export const config = { runtime: 'edge' };

export default async function handler(req) {
  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Basic origin check (update to your domain once live)
  const origin = req.headers.get('origin') || '';
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    // Add your production domain here, e.g.:
    // 'https://veil.app',
  ];
  const isAllowed = allowedOrigins.some(o => origin.startsWith(o)) || origin === '';

  const corsHeaders = {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: corsHeaders,
    });
  }

  const { card, focus, question } = body;
  if (!card) {
    return new Response(JSON.stringify({ error: 'card is required' }), {
      status: 400, headers: corsHeaders,
    });
  }

  const focusLine = focus ? `The querent is focused on: ${focus}.` : '';
  const questionLine = question ? `Their current question or weight: "${question}"` : '';

  const prompt = `You are a wise, compassionate tarot reader with a warm, literary voice.
The querent has drawn ${card.name} (${card.archetype}).
${focusLine}
${questionLine}

Write a short, personal tarot reading (3–4 sentences).
- Make it feel specific to their situation, not generic.
- Use poetic but clear language.
- Avoid fortune-telling clichés.
- Speak directly to them in second person.
- Don't mention the card name in the first sentence.
- End with a gentle, open question or invitation to reflect.`;

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!anthropicRes.ok) {
      const err = await anthropicRes.text();
      console.error('Anthropic error:', err);
      return new Response(JSON.stringify({ error: 'Reading service unavailable' }), {
        status: 502, headers: corsHeaders,
      });
    }

    const data = await anthropicRes.json();
    const reading = data.content.map(b => b.text || '').join('');

    return new Response(JSON.stringify({ reading }), {
      status: 200, headers: corsHeaders,
    });
  } catch (err) {
    console.error('Handler error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500, headers: corsHeaders,
    });
  }
}
