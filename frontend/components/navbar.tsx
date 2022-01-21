import { GetServerSideProps } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import * as React from "react"

import AccountCircle from "@mui/icons-material/AccountCircle"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export function Navbar() {
  const { data: session } = useSession()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" variant="elevation">
        <Toolbar>
          <Link href="/" passHref>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              มอเตอร์พลัส
            </Typography>
          </Link>
          {session && (
            <Box>
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
                // id="menu-appbar"
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
                <MenuItem onClick={() => signOut()}>Log out</MenuItem>
              </Menu>
            </Box>
          )}
          {!session && (
            <Button variant="contained" color="info" onClick={() => signIn()}>
              เข้าสู่ระบบ
            </Button>
          )}
        </Toolbar>
      </AppBar>
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

export default Navbar
