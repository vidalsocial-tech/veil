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
    'https://veilreads.com',
    'https://www.veilreads.com',
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

  const { card, focus, question, moonPhase, moonEnergy } = body;
  if (!card) {
    return new Response(JSON.stringify({ error: 'card is required' }), {
      status: 400, headers: corsHeaders,
    });
  }

  const focusLine    = focus       ? `The querent is focused on: ${focus}.` : '';
  const questionLine = question    ? `Their current thought: "${question}"` : '';
  const moonLine     = moonPhase   ? `Today's moon phase is ${moonPhase} — ${moonEnergy}` : '';

  const prompt = `You are a thoughtful tarot reader with a quiet, literary voice. Your role is to offer reflection, not direction.
The querent has drawn ${card.name} (${card.archetype}).
Traditional meaning of this card: ${card.meaning}
${focusLine}
${questionLine}
${moonLine}

Write a short tarot reading (3–4 sentences) following these rules strictly:
- Be completely neutral in tone — neither reassuring nor alarming, neither hopeful nor ominous
- Do not tell the querent what to do, what will happen, or what they should feel
- Use open, spacious language that leaves room for many interpretations
- Speak in second person but observe, don't prescribe
- Avoid words like: should, must, will, need to, good, bad, positive, negative, difficult, hard, easy, lucky, challenge, struggle, success, fear, courage, power
- If a moon phase is provided, weave it in naturally — just once, lightly
- Do not name the card in the first sentence
- End with a genuinely open question — one that has no obvious answer
- The reading should feel like a mirror, not a message`;

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
