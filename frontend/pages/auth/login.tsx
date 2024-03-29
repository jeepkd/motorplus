import { GetServerSideProps } from "next"
import { getCsrfToken, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Alert, Snackbar } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import FormControlLabel from "@mui/material/FormControlLabel"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

import Layout from "../../components/layout"
import { SnackbarAlert } from "../../components/snackbar-alert"
import { Page } from "../../types/page"

interface Props {
  csrfToken?: string
}

const Login: Page<Props> = ({ csrfToken }) => {
  const { data: session } = useSession()
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  const router = useRouter()
  const { error } = router.query

  if (session) {
    router.push("/")
  }

  useEffect(() => {
    if (error === "CredentialsSignin") setErrorMessage("รหัสผ่านไม่ถูกต้อง")
    else if (error === "SessionRequired") setErrorMessage("กรุณาเข้าสู่ระบบ")
    else if (error)
      setErrorMessage("โปรแกรมทำงานผิดพลาดบางอย่าง ติดต่อผู้ดูแลระบบ")
  }, [error])

  return (
    <Container component="main" maxWidth="xs">
      {errorMessage && <SnackbarAlert>{errorMessage}</SnackbarAlert>}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          เข้าสู่ระบบ
        </Typography>
        <Box
          component="form"
          noValidate
          action="/api/auth/callback/credentials"
          method="post"
          sx={{ mt: 1 }}
        >
          <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="เข้าสู่ระบบค้างไว้"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in
          </Button>
        </Box>
      </Box>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            ลืมรหัสผ่าน
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

// Login.getLayout = (page) => {
//   return <Layout>{page}</Layout>
// }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const props: Props = {
    csrfToken: await getCsrfToken(ctx),
  }
  return {
    props,
  }
}

export default Login
