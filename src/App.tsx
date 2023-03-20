import {
  Button,
  Box,
  TextField,
  Stack
} from "@mui/material"

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Hi, how are you?"
          variant="outlined"
        />
        <Button variant="contained">
          Send
        </Button>
      </Stack>
    </Box>
  )
}

export default App
