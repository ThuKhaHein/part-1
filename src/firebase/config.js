// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHiNbGP-9bNnc3n0I9WPI7VKBcs3e3eU",
  authDomain: "react-firebase-gallary-develop.firebaseapp.com",
  projectId: "react-firebase-gallary-develop",
  storageBucket: "react-firebase-gallary-develop.appspot.com",
  messagingSenderId: "895351710319",
  appId: "1:895351710319:web:557326ba054090117fa39a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();