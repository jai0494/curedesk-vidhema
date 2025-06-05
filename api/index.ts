// api/index.ts
import { readFileSync } from 'fs'
import path from 'path'
import { render } from '../dist/server/entry-server'

export default function handler(req: any, res: any) {
  const url = req.url || '/'

  // Serve static assets manually
  if (url.startsWith('/assets/')) {
    try {
      const filePath = path.join(__dirname, '../dist/client', url)
      const file = readFileSync(filePath)
      res.status(200).send(file)
      return
    } catch (e) {
      res.status(404).send('Asset not found')
      return
    }
  }

  // SSR
  try {
    const { html } = render({ path: url })
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(html)
  } catch (err) {
    const errorHtml = render({ path: url, statusCode: 500 })
    res.status(500).send(errorHtml)
  }
}
