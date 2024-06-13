import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCayNSXPMOJkCZ9srtUhme-8bsZfvsjXo4",
  authDomain: "laundary-app-8fd8e.firebaseapp.com",
  projectId: "laundary-app-8fd8e",
  storageBucket: "laundary-app-8fd8e.appspot.com",
  messagingSenderId: "788307921368",
  appId: "1:788307921368:web:1204ab5fedb127bae70aad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
