import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCQvN0rOxYkz74_o2TLynzWGkxIYFUfKrE",
    authDomain: "sabkabazar-402f3.firebaseapp.com",
    projectId: "sabkabazar-402f3",
    storageBucket: "sabkabazar-402f3.appspot.com",
    messagingSenderId: "161680381691",
    appId: "1:161680381691:web:ce03f333427ec5ccedc25e",
    measurementId: "G-5MM7K0WBXE"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 } else {
    firebase.app(); // if already initialized, use that one
 }

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }