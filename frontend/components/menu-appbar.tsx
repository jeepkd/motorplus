import * as React from "react"

import { signIn, useSession } from "next-auth/react"

import AccountCircle from "@mui/icons-material/AccountCircle"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import { GetServerSideProps } from "next"
import IconButton from "@mui/material/IconButton"
import Link from "next/link"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Switch from "@mui/material/Switch"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export function MenuAppBar() {
  const { data: session } = useSession()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant="elevation">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            มอเตอร์พลัส
          </Typography>
          {session && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </div>
          )}
          {!session && (
            <Link
              href="/api/auth/signin"
              onClick={(e: Event) => {
                e.preventDefault()
                signIn()
              }}
              passHref
            >
              <Button variant="contained" color="info">
                เข้าสู่ระบบ
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={session}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={session ? "Logout" : "Login"}
        /> */}
      </FormGroup>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default MenuAppBar
