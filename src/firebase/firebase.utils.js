import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCiPkvRBJjvUvLAi_26gvtXAUNqI2wEi8Y",
  authDomain: "mad-dicer.firebaseapp.com",
  projectId: "mad-dicer",
  storageBucket: "mad-dicer.appspot.com",
  messagingSenderId: "316829564129",
  appId: "1:316829564129:web:3fd0ab835443ac5b544ba0",
  measurementId: "G-G2XVLZ09HQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
