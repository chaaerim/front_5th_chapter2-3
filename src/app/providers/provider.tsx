import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { OverlayProvider } from "overlay-kit"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    },
  },
})

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <OverlayProvider>{children}</OverlayProvider>
      </Router>
    </QueryClientProvider>
  )
}
