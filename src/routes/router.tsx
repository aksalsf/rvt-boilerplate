import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

import BaseLayout from "@/layouts/base-layout"

const SearchPokemon = lazy(() => import("@/pages/search-pokemon"))
const PokemonCard = lazy(() => import("@/pages/pokemon-card"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <SearchPokemon />,
      },
      {
        path: "/pokemon/:pokemon",
        element: <PokemonCard />
      }
    ]
  },
  {
    path: "*",
    element: <h1>404</h1>
  }
])

export default router

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
