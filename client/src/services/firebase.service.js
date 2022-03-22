import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9bwx4lxve8b9Ch8CMF37jvAfpI7kLyAA",
  authDomain: "sabka-bazaar-9972d.firebaseapp.com",
  projectId: "sabka-bazaar-9972d",
  storageBucket: "sabka-bazaar-9972d.appspot.com",
  messagingSenderId: "328613791660",
  appId: "1:328613791660:web:1b67d13750ac080afadc09",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
