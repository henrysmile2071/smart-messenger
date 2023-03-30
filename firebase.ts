import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh7fEjt4bX22CJitea8eWfSKSPQYHL8SM",
  authDomain: "smart-messenger-91916.firebaseapp.com",
  projectId: "smart-messenger-91916",
  storageBucket: "smart-messenger-91916.appspot.com",
  messagingSenderId: "465173069522",
  appId: "1:465173069522:web:c4e906950f76cfe46d770b",
  measurementId: "G-76X5VHY7P4",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export{ db }