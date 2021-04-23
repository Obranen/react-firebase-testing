import React, {useContext, useState} from 'react'
import {Context} from "../../index"
import {useAuthState} from "react-firebase-hooks/auth"
import {Avatar, Box, Button, Container, Grid, Paper, Typography} from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import {useCollectionData} from "react-firebase-hooks/firestore"
import firebase from "firebase"
import CircularProgress from '@material-ui/core/CircularProgress'
import chatStyles from './chatStyles'

const Chat = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  const classes = chatStyles()

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')
  }

  if (loading) {
    return (
      <Box className={classes.preloading}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Container>
      <Grid container className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Typography align={"center"} variant={"h4"} className={classes.title}>
            Общий чат
          </Typography>
          {messages.map((message, value) =>
            <Paper className={classes.wrapMassage} key={value} style={{
              marginLeft: user.uid === message.uid ? 'auto' : '10px',
            }}>
              <Grid container className={classes.message}>
                <Avatar className={classes.avatar} src={message.photoURL}/>
                <Typography variant={"inherit"} className={classes.titleMessage}>
                  {message.displayName}
                </Typography>
              </Grid>
              <Box className={classes.wrapText}>
                <Typography variant={"inherit"} className={classes.text}>
                  {message.text}
                </Typography>
              </Box>
            </Paper>
          )}
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            value={value}
            onChange={e => setValue(e.target.value)}
            className={classes.textInput}
            autoFocus
          />
          <Button fullWidth color={"primary"} onClick={sendMessage} variant={"outlined"}>Отправить</Button>
        </Paper>
      </Grid>
    </Container>
  )
}

export default Chat
