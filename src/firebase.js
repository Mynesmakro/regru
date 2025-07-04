  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyA8Q2ZArUhc3iH6T48IziZe9wa1E8EBspw",
  authDomain: "lidydost.firebaseapp.com",
  projectId: "lidydost",
  storageBucket: "lidydost.firebasestorage.app",
  messagingSenderId: "271484071188",
  appId: "1:271484071188:web:75fca13c92a5209ef22601",
  measurementId: "G-4YZDZ5ZNSQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
