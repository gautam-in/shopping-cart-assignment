import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB5vglwoIAaWF-1_6hM1CUmOHU4NoCkoKw",
    authDomain: "sabkabazaar-b2c22.firebaseapp.com",
    projectId: "sabkabazaar-b2c22",
    storageBucket: "sabkabazaar-b2c22.appspot.com",
    messagingSenderId: "42153555764",
    appId: "1:42153555764:web:b37efba89a7003c9a01761"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }