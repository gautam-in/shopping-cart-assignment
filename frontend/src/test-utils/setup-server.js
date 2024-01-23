import { setupServer } from "msw/node"

export const getServer = (handlers) => {
  const server = setupServer(handlers)

  return server()
}
