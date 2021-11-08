
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBw0R02h021iimCqmn4sjflmlgJmNrZMGU",
  authDomain: "crwn-db-78ef9.firebaseapp.com",
  projectId: "crwn-db-78ef9",
  storageBucket: "crwn-db-78ef9.appspot.com",
  messagingSenderId: "448760101203",
  appId: "1:448760101203:web:e8a131d1dbb3dc9e6509a6"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase