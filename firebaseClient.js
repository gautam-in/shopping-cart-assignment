import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC1ekplw-lZioAqUMfRTMB9MOFTCWugUK4",
  authDomain: "shopping-cart-192db.firebaseapp.com",
  databaseURL: "https://shopping-cart-192db-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-192db",
  storageBucket: "shopping-cart-192db.appspot.com",
  messagingSenderId: "510038510607",
  appId: "1:510038510607:web:2944b50559042b7854677a",
};

export default function firebaseClient() {
  if (!firebase.apps.length) return firebase.initializeApp(config);
}
