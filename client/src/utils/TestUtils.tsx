import React from "react"
import { MemoryRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: false,
    },
  },
})

export const WithQueryClient = ({
  children,
}: {
  children: React.ReactNode
}) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

export const WithRouter = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
)

export const WrappedComponent = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <WithQueryClient>
    <MemoryRouter>{children}</MemoryRouter>
  </WithQueryClient>
)
