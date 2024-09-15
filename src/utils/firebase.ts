// src/utils/firebase.ts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";  // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaWc6DbAEftJbXduZddvHQ6scjc1DFG2g",
  authDomain: "sloane-website-afb7a.firebaseapp.com",
  projectId: "sloane-website-afb7a",
  storageBucket: "sloane-website-afb7a.appspot.com",
  messagingSenderId: "850734707059",
  appId: "1:850734707059:web:7824825d97bd8d65745506",
  measurementId: "G-D8N7L3W49S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

// Initialize Analytics (optional)
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Export Firestore and Storage
export { db, storage };
