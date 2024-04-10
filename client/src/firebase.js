// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  
  authDomain: "mern-blog-456ec.firebaseapp.com",
  projectId: "mern-blog-456ec",
  storageBucket: "mern-blog-456ec.appspot.com",
  messagingSenderId: "486950936313",
  appId: "1:486950936313:web:38fa47cc9aa3a03dd78c28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);