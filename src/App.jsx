import { ThemeProvider } from "styled-components"
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import GlobalStyle from "./styles/GlobalStyle"

import router from "./routes/router/index.jsx";
import { theme } from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Loader from "./components/Loader/index.jsx";

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router}/>
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
