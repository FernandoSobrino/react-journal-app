

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt16Ay-g3JewyKHbbPohl9JO-q2py6wIw",
  authDomain: "react-cursos-2d318.firebaseapp.com",
  projectId: "react-cursos-2d318",
  storageBucket: "react-cursos-2d318.appspot.com",
  messagingSenderId: "183308577853",
  appId: "1:183308577853:web:4df5d5297c74d2cbd20e54"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(Firebaseapp);

export const FirebaseDB = getFirestore(Firebaseapp);