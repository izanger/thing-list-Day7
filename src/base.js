import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAW79zmgUG_daWdPbAEDf6Z5fJ8qD1p4CE",
  authDomain: "thing-list-4f6d8.firebaseapp.com",
  databaseURL: "https://thing-list-4f6d8.firebaseio.com",
  projectId: "thing-list-4f6d8",
  storageBucket: "thing-list-4f6d8.appspot.com",
  messagingSenderId: "310789136767"
})

const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)
