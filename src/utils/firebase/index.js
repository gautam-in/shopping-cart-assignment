import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    getDocs,
    deleteDoc
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.id);
        batch.set(docRef, object);
    });

    await batch.commit();
}

export const getAllDocuments = async(collectionKey) => {
    const querySnapshot = await getDocs(collection(db, collectionKey));
    const data = [];
    await querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
    console.log(doc.id, " => ", doc.data());
});
return data;
}

export const removeDocumentFromCollection = async (collectionKey, documentId) => {
    await deleteDoc(doc(db, collectionKey, documentId));
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

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