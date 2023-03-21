import * as React from "react"

import { GlobalStyles } from "@mui/material"
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
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </React.Fragment>
  )
}

export default BaseLayout
