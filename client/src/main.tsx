import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"

import App from "./App"

import { AuthContextProvider, CartContextProvider } from "./context"

import "./index.scss"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 10,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router basename="/">
            <App />
          </Router>
        </QueryClientProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
