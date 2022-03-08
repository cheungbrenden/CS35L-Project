// Import the functions you need from the SDKs you need
// import firebase from "firebase";
// //import firebase from 'firebase/compat/app';
// import 'firebase/firestore'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMw6DdlNs8meQEFANQOAZPG9eSDKdWwaI",
  authDomain: "thestudy-4746e.firebaseapp.com",
  projectId: "thestudy-4746e",
  storageBucket: "thestudy-4746e.appspot.com",
  messagingSenderId: "408447643629",
  appId: "1:408447643629:web:09882c628d6c9a5cfec1e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
// const auth = firebase.auth();
// const db = firebase.firestore();

//Useful Functions
// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const logout = () => {
//   auth.signOut();
// };

// export default app;
