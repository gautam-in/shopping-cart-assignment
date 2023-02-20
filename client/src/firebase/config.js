import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZLWRJ683Q3GsuzZ97oXErsR-JLFT7gvU",
  authDomain: "sabkabazaar-b1eec.firebaseapp.com",
  projectId: "sabkabazaar-b1eec",
  storageBucket: "sabkabazaar-b1eec.appspot.com",
  messagingSenderId: "732323751636",
  appId: "1:732323751636:web:1a5f897ce0fdf5ef603d41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
