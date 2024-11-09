import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Query Client if needed
// const queryClient= new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <QueryClientProvider queryClient={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
