import {makeStyles} from "@material-ui/core/styles";

const chatStyles = makeStyles((theme) => ({
  preloading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: '60%',
    marginTop: 60,
    padding: 20,
  },
  title: {
    marginBottom: 30,
  },
  textInput: {},
  avatar: {},
  message: {
    padding: 10,
    minWidth: 300,
  },
  titleMessage: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 6,
    marginTop: 6,
  },
  text: {
    fontSize: 16,
  },
  wrapText: {
    textAlign: "center",
  },
  wrapMassage: {
    width: 'fit-content',
    padding: 5,
    margin: '20px 10px',
  }
}))

export default chatStyles