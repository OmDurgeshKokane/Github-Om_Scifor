// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiOY2dBkTuASX9auPSQEZ_o_vrXSIOmp0",
  authDomain: "tech-blog-dd94c.firebaseapp.com",
  projectId: "tech-blog-dd94c",
  storageBucket: "tech-blog-dd94c.firebasestorage.app",
  messagingSenderId: "102067662734",
  appId: "1:102067662734:web:b176f459b1bce35a863edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}