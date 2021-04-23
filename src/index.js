import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBO5zvBjH706laQoZvH4OgtQQhWZl0meME",
    authDomain: "react-firebase-testing-71d0a.firebaseapp.com",
    projectId: "react-firebase-testing-71d0a",
    storageBucket: "react-firebase-testing-71d0a.appspot.com",
    messagingSenderId: "851086239971",
    appId: "1:851086239971:web:90dba680f1cdb57bd97dd6",
    measurementId: "G-895J2J5W7R"
  }
)

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
)

