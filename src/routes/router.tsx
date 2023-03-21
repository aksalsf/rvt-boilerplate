import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

import BaseLayout from "@/layouts/base-layout"

const SearchPokemon = lazy(() => import("@/pages/search-pokemon"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <SearchPokemon />,
      },
    ]
  }
])

export default router

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
