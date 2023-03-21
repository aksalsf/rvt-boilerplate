import * as React from "react"

import { Box, GlobalStyles, Paper } from "@mui/material"
import { Outlet } from "react-router-dom"

function BaseLayout(): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          "#root": {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          },
        }}
      />
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
          <React.Suspense>
            <Outlet />
          </React.Suspense>
        </Paper>
      </Box>
    </React.Fragment>
  )
}

export default BaseLayout
