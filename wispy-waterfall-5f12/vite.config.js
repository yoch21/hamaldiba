import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function redirectPlugin() {
  return {
    name: 'redirect-signup',
    configureServer(server) {
      const redirect = (_req, res) => {
        res.writeHead(301, { Location: 'https://wkf.ms/4mbNjAQ' })
        res.end()
      }
      server.middlewares.use('/signup', redirect)
      server.middlewares.use('/join', redirect)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), redirectPlugin()],
})
