import connect from 'connect'
import { createProxyMiddleware } from 'http-proxy-middleware'
import config from '~/server.config'

const app = connect()

for (const server of config) {
  if (server.targetUrl) {
    const proxy = createProxyMiddleware(server.baseUrl, {
      target: server.targetUrl,
      changeOrigin: true,
      secure      : server.secure,
      pathRewrite: server.pathRewrite || { [`^${server.baseUrl}`]: '/' },
      router: server.router,
      onProxyReq: server.onProxyReq,
      onProxyRes: server.onProxyRes,
    })

    app.use(proxy as connect.NextHandleFunction)
  }
}

export default fromNodeMiddleware(app)