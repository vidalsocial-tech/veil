import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { Readable } from 'node:stream';

/** Serves /api/reading from server/reading.ts during `npm run dev` (Vercel does it in production). */
function readingApi(): Plugin {
  return {
    name: 'veil-reading-api',
    configureServer(server) {
      server.middlewares.use('/api/reading', async (req, res) => {
        try {
          const chunks: Buffer[] = [];
          for await (const c of req) chunks.push(c as Buffer);
          const request = new Request('http://localhost/api/reading', {
            method: req.method,
            headers: { 'content-type': req.headers['content-type'] ?? 'application/json' },
            body: req.method === 'POST' ? Buffer.concat(chunks) : undefined,
          });
          const { handleReading } = await server.ssrLoadModule('/server/reading.ts');
          const response: Response = await handleReading(request);
          res.statusCode = response.status;
          response.headers.forEach((v, k) => res.setHeader(k, v));
          if (!response.body) return res.end();
          Readable.fromWeb(response.body as never)
            .on('error', () => res.destroy())
            .pipe(res);
        } catch (err) {
          console.error('[veil] dev api error', err);
          res.statusCode = 500;
          res.end('error');
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Make ANTHROPIC_API_KEY etc. from .env.local visible to the dev API.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  // Absolute base URL for link-preview images: SITE_URL if set, else the live domain.
  const siteUrl = (process.env.SITE_URL || 'https://veilreads.com').replace(/\/$/, '');
  return {
    plugins: [
      react(),
      readingApi(),
      { name: 'veil-site-url', transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl) },
    ],
    server: { port: 5175, strictPort: true, host: true },
  };
});
