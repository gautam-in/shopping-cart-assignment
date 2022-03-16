import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBPrTgZk5Y_JjmfGW-ATypykGObCK2PEK8",
    authDomain: "shopping-cart-8dd44.firebaseapp.com",
    projectId: "shopping-cart-8dd44",
    storageBucket: "shopping-cart-8dd44.appspot.com",
    messagingSenderId: "1065334536870",
    appId: "1:1065334536870:web:a760e27e05d629ea3e1267",
    measurementId: "G-WZBV2MJXFK"
  };
  
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    console.log("snapshot",snapShot);
    if (!snapShot.exists) {
      const { firstname, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          firstname,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };


export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
