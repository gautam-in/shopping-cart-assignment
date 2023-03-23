import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBHUuwIxTSkOB1pIH-CtOr6T9CTqRBE9AU",
  authDomain: "ps-assignment.firebaseapp.com",
  projectId: "ps-assignment",
  storageBucket: "ps-assignment.appspot.com",
  messagingSenderId: "218890057473",
  appId: "1:218890057473:web:9e7ac1704a328d48b5cd00",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
