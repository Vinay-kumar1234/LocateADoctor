// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyGxCtc9kJROEjFsBn_BW5PPdSYZbE14E3E",
  authDomain: "locate-a-doctor-d525b.firebaseapp.com",
  projectId: "locate-a-doctor-d525b",
  storageBucket: "locate-a-doctor-d525b.appspot.com",
  messagingSenderId: "475115892672",
  appId: "1:475115892672:web:dfec4b33ec6c071271b979",
  measurementId: "G-0C1G71ZM9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// ✅ Export Firestore database to use across components
export default db;
