const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const PROXY = "http://localhost:5000"
module.exports = {
      /* config options here */
      async rewrites() {
            const server_routes = [
                  "/banners",
                  "/products"
            ]
            return server_routes.map((item) => {
                  return {
                        source: `${item}`,
                        destination: `${PROXY}/${item}`,
                  }
            })
      }
}