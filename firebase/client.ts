import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7MQTGsd9gZEhC-WI8k2zo9qDsq3w1Gi8",
  authDomain: "prepwise-b29f7.firebaseapp.com",
  projectId: "prepwise-b29f7",
  storageBucket: "prepwise-b29f7.firebasestorage.app",
  messagingSenderId: "210194864393",
  appId: "1:210194864393:web:0e123ac5eb2852aba3dbd8",
  measurementId: "G-BMHHBEQLPS",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
