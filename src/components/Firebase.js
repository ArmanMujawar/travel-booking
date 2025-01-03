
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnfEx_RmOQTM6OAeDEUsXFdd6tDLb6ns8",
  authDomain: "travel-4c525.firebaseapp.com",
  projectId: "travel-4c525",
  storageBucket: "travel-4c525.firebasestorage.app",
  messagingSenderId: "59430717938",
  appId: "1:59430717938:web:3ed7efc5272ef133b5836b",
  measurementId: "G-9NLGEH3C22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export { db };
