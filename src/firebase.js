// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);
