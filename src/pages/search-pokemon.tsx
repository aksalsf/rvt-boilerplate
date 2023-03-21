import {
  Button,
  Box,
  Paper,
  TextField,
  Stack
} from "@mui/material"

function SearchPokemon() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={0}
        sx={{
          padding: 4,
        }}
      >
        <Stack spacing={4}>
          <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              variant="standard"
              placeholder="Type your favorite pokemon"
            />
            <Button variant="contained">
              Search
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}

export default SearchPokemon
