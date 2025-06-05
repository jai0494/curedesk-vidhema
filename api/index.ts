import { readFileSync } from 'fs';
import path from 'path';
import { render } from '../dist/server/entry-server';

export default function handler(req: any, res: any) {
  const url = req.url || '/';
  try {
    // Serve static assets from dist/client
    if (url.startsWith('/assets/')) {
      const assetPath = path.join(process.cwd(), 'dist/client', url);
      const asset = readFileSync(assetPath);
      res.status(200).send(asset);
      return;
    }

    // Render HTML
    const { html } = render({ path: url });
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (err: any) {
    console.error('SSR Error:', err.message || err);
    const errorHtml = render({ path: url, statusCode: 500 });
    res.status(500).send(errorHtml);
  }
}
