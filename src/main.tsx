import React from "react"
import ReactDOM from "react-dom/client"

import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"

import { router } from "@/routes"
import MUI_THEME from "@/styles/mui-theme"

import "@fontsource/noto-sans/300.css"
import "@fontsource/noto-sans/400.css"
import "@fontsource/noto-sans/500.css"
import "@fontsource/noto-sans/700.css"
import "@/assets/css/main.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={MUI_THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
