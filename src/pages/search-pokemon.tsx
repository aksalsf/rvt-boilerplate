import {
  Button,
  Stack
} from "@mui/material"

import { TextField } from "@/components/form"
import { useSearchPokemon } from "@/features/pokemon"

function SearchPokemon() {
  const { form, methods } = useSearchPokemon()
  return (
    <Stack spacing={4}>
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
      <form onSubmit={form.handleSubmit(methods.onSubmit)}>
        <Stack spacing={2}>
          <TextField
            name="pokemon"
            control={form.control}
            size="small"
          />
          <Button
            type="submit"
            variant="contained"
          >
            Search
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default SearchPokemon
