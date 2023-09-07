
import {mimes} from 'https://deno.land/x/mrmime@v1.0.1/mod.ts'
mimes['js'] = 'text/javascript' // fix for deprecated application/javascript

const log = console.log

const server = Deno.serve({port: 8080, hostname: '0.0.0.0'}, requestHandler)
const wwwDir = '../frontend'

async function requestHandler(request) {
  const url = new URL(request.url)
  log('request: ', ''+url, url.pathname)
  switch (request.method) {
    case 'GET': {
      try {
        const filePath = url.pathname.endsWith('/') ? url.pathname+'index.html' : url.pathname
        const file = await Deno.open(wwwDir+filePath)
        const extDot = url.pathname.lastIndexOf('.')
        const extension = (extDot != -1) ? url.pathname.slice(extDot+1).toLowerCase() : undefined
        const mimeType = mimes[extension]
        const headers = {}
        if (mimeType) headers['content-type'] = mimeType
        return new Response(file.readable, {headers})
      } catch (error) {
        return new Response('Error, page not found!', {status: 404})
      }
    } break
  }
}
