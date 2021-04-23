import React, {useContext} from 'react'
import {Button, Container, Grid, Paper} from "@material-ui/core"
import {Context} from "../../index"
import firebase from "firebase"
import {makeStyles} from "@material-ui/core/styles";

const loginStyles = makeStyles((theme) => ({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
  paper: {
    padding: 50,
  },
}))

const Login = () => {
  const {auth} = useContext(Context)

  const classes = loginStyles()

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
  }

  return (
    <Container>
        <Grid container className={classes.wrapper}>
          <Paper className={classes.paper} a>
            <Button onClick={login} color={"secondary"} variant={"outlined"}>Войти с помощью Google</Button>
          </Paper>
        </Grid>
    </Container>
  )
}

export default Login
