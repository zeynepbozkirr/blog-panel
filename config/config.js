// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQT6obLypoT3TEC0M9FXVvxBlOWEp_MCk",
  authDomain: "blog-app-7c9c6.firebaseapp.com",
  projectId: "blog-app-7c9c6",
  storageBucket: "blog-app-7c9c6.appspot.com",
  messagingSenderId: "681368293512",
  appId: "1:681368293512:web:59cbc42c63fe24881acf3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
