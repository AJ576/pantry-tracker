// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCta-ZC2QA-WJ84NUHITDJGxT9ZcH-se3Q",
  authDomain: "pantry-tracker-2f644.firebaseapp.com",
  projectId: "pantry-tracker-2f644",
  storageBucket: "pantry-tracker-2f644.appspot.com",
  messagingSenderId: "490170807186",
  appId: "1:490170807186:web:293b3634e804498755474b",
  measurementId: "G-NPMMRK9R9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}