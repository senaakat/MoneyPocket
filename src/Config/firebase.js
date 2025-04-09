import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbqKGV2GmJJetBV3duMTKby7ppFEGOMZc",
  authDomain: "money-pocket-67ebc.firebaseapp.com",
  projectId: "money-pocket-67ebc",
  storageBucket: "money-pocket-67ebc.appspot.com",
  messagingSenderId: "939728434916",
  appId: "1:939728434916:web:df98a4b8a4204b187b1ef1",
  measurementId: "G-9133XHZ3NQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
