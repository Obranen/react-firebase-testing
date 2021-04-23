import React, {useContext} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import AppRouter from "./components/AppRouter/AppRouter"
import {Context} from "./index"
import {useAuthState} from "react-firebase-hooks/auth"
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const appStyles = makeStyles((theme) => ({
  preloading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const App = () => {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  const classes = appStyles()

  if (loading) {
    return (
      <Box className={classes.preloading}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
