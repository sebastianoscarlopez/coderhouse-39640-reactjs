
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// TODO: Replace the following with your app's Firebase project configuration
console.log('HERE FIRESTORE CONFIGURATION');
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
