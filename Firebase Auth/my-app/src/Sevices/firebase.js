// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs09_wkiHRxSyHxIhJuI2iJl2NUF-phUA",
  authDomain: "demoauth-6c32a.firebaseapp.com",
  projectId: "demoauth-6c32a",
  storageBucket: "demoauth-6c32a.appspot.com",
  messagingSenderId: "443002149219",
  appId: "1:443002149219:web:67f6963e8d98c248a45b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app)