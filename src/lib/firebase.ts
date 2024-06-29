import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDBkRmxtqhc06XMWUKOM2ncSZYiAvrAsng",
  authDomain: "expancetracker-95716.firebaseapp.com",
  projectId: "expancetracker-95716",
  storageBucket: "expancetracker-95716.appspot.com",
  messagingSenderId: "593890092338",
  appId: "1:593890092338:web:bf6d41bce79d1fe549632b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);