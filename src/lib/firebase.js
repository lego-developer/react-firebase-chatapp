import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ed76c.firebaseapp.com",
  projectId: "reactchat-ed76c",
  storageBucket: "reactchat-ed76c.appspot.com",
  messagingSenderId: "655748851316",
  appId: "1:655748851316:web:d86ee1ac231659edf2d321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()








