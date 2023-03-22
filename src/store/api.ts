// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import type { Pokemon } from "@/features/pokemon"

export const api = createApi({
  // The base URL used for all requests
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  // The endpoints are generated for the 'pokemon' resource
  endpoints: (builder) => ({
    getPokemon: builder.query<Pokemon, string>({
      // The query function is called with the 'name' argument
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonQuery } = api
