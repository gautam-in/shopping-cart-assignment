import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuUPEhuLVkZggIXRiVJPiLiZJwY_BUKwA",
  authDomain: "shopping-cart-54a1a.firebaseapp.com",
  projectId: "shopping-cart-54a1a",
  storageBucket: "shopping-cart-54a1a.appspot.com",
  messagingSenderId: "1083212507804",
  appId: "1:1083212507804:web:50fed66022ea4e05e89b59",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
