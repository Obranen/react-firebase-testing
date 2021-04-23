import React, {useContext} from 'react'
import {Button, Typography, Toolbar, AppBar} from "@material-ui/core"
import {LOGIN_ROUTE} from "../../utils/consts"
import {Context} from "../../index"
import {useAuthState} from "react-firebase-hooks/auth"
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    color: '#fff',
    borderColor: '#fff',
  }
}));

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          FireBase
        </Typography>
        {
          user ?
            <Button
              onClick={() => auth.signOut()}
              to={LOGIN_ROUTE} className={classes.btn}
              variant={"outlined"}
            >Выйти</Button>
            :
            <Button
              to={LOGIN_ROUTE}
              className={classes.btn}
              variant={"outlined"}
            >Логин</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
