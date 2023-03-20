import { createTheme } from "@mui/material/styles"

const MUI_THEME = createTheme({
  typography: {
    fontFamily: [
      "Noto Sans",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
})

export default MUI_THEME
