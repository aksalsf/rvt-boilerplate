import React from "react"

import {
  Button,
  CircularProgress,
  Stack,
  Typography
} from "@mui/material"
import { redirect, useNavigate, useParams } from "react-router-dom"

import type { Pokemon } from "@/features/pokemon"
import { useGetPokemonQuery } from "@/store/api"

type SearchPokemonResultProps = {
  pokemon: Pokemon
}

function SearchPokemonResult ({
  pokemon
}: SearchPokemonResultProps) {
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        component="h1"
      >
        {pokemon?.name}
      </Typography>
      <img
        src={pokemon?.sprites.front_default}
        alt={pokemon?.name}
        className="h-32 w-32"
      />
    </React.Fragment>
  )
}

function PokemonCard () {
  const { pokemon } = useParams<{ pokemon: string }>()
  if (!pokemon) return redirect("/")

  const navigate = useNavigate()
  function handleClickBack() {
    navigate("/")
  }

  const {
    data,
    isLoading,
    isSuccess,
    isError
  } = useGetPokemonQuery(pokemon)

  return (
    <Stack
      spacing={4}
      sx={{
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {isLoading && (
        <CircularProgress />
      )}
      {isError && (
        <Typography
          variant="h6"
          component="h1"
        >
          Pokemon not found
        </Typography>
      )}
      {isSuccess && (
        <SearchPokemonResult pokemon={data} />
      )}
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        onClick={handleClickBack}
      >
        Back
      </Button>
    </Stack>
  )
}

export default PokemonCard
