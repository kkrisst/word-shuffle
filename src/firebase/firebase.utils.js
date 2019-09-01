import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC8CtZBTmgehiSr_gYUk3iXpj0HIWgv5eE",
  authDomain: "word-shuffle-e92dd.firebaseapp.com",
  databaseURL: "https://word-shuffle-e92dd.firebaseio.com",
  projectId: "word-shuffle-e92dd",
  storageBucket: "",
  messagingSenderId: "414322230337",
  appId: "1:414322230337:web:d8ba93d452401590"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  
  if(!snapshot.exists) {
    const { displayName, email, licence } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        licence,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
