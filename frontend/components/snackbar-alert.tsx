import React, { useState } from "react"

import { Alert, Snackbar } from "@mui/material"

type Props = {}

export const SnackbarAlert: React.FunctionComponent<Props> = ({ children }) => {
  const [snackOpen, setSnackOpen] = useState(true)
  // const { children } = props
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return
    setSnackOpen(false)
  }
  return (
    <Snackbar
      open={snackOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ width: "30%" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {children}
      </Alert>
    </Snackbar>
  )
}
