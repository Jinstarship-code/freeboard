// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4RdIZIzvz2ECnfAVi6B4d4ze1yv2m4pI",
  authDomain: "myfirebase-c22c5.firebaseapp.com",
  projectId: "myfirebase-c22c5",
  storageBucket: "myfirebase-c22c5.appspot.com",
  messagingSenderId: "904413068991",
  appId: "1:904413068991:web:5c3e7e9e584db6ea24900a",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const myDB = getFirestore(firebaseApp);
