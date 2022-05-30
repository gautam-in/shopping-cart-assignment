// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwv4zsG55AtNHweajKDRNfGAI3TgUkb9o",
  authDomain: "shopping-cart-e1e0f.firebaseapp.com",
  projectId: "shopping-cart-e1e0f",
  storageBucket: "shopping-cart-e1e0f.appspot.com",
  messagingSenderId: "530565552349",
  appId: "1:530565552349:web:a357241f4519e500276334",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

const signInWithEmailAndPasswordFunction = async (email, password) => {
  console.log(email);
  console.log(password);
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = async () => await signOut(auth);

const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);

export {
  auth,
  signOutUser,
  createAuthUserWithEmailAndPassword,
  signInWithEmailAndPasswordFunction,
  onAuthStateChangedListner,
};
