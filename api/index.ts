// api/index.ts (or index.js if you're using JavaScript)
import { render } from '../dist/server/entry-server' // adjust path if needed

export default async function handler(req: any, res: any) {
  const path = req.url || '/'

  try {
    const { html } = render({ path })
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(html)
  } catch (err) {
    console.error(err)
    const errorHtml = render({ path, statusCode: 500 })
    res.status(500).send(errorHtml)
  }
}
