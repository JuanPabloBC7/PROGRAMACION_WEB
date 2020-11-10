import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX2QJfktmXliQELCZ9ePYIoqjaGqeVzuw",
    authDomain: "farmaciausers.firebaseapp.com",
    databaseURL: "https://farmaciausers.firebaseio.com",
    projectId: "farmaciausers",
    storageBucket: "farmaciausers.appspot.com",
    messagingSenderId: "695090491474",
    appId: "1:695090491474:web:f0d416a05950a546eaef8b",
    measurementId: "G-WXYWY8ZF39"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };