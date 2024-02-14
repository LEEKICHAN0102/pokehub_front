import { ThemeProvider } from "styled-components"
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle"

import router from "./routes/router/index.jsx";
import { theme } from "./styles/theme";
import "./styles/font.modules.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router}/>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
