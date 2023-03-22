import { createSlice } from "@reduxjs/toolkit"

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: "",
  },
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload
    } 
  }
})
