import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDfG4m070zuiD20COtzS23GCwdbCvgOdY",
    authDomain: "sabkaa-bazaar.firebaseapp.com",
    projectId: "sabkaa-bazaar",
    storageBucket: "sabkaa-bazaar.appspot.com",
    messagingSenderId: "1023370297738",
    appId: "1:1023370297738:web:af3c50fe4e3d7e030f0873"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot, userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
          console.log('Error', error);
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);