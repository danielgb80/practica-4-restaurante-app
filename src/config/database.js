// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEsJ1qOP-vJ5XdvLUF6ZkBVAT9L3bHAzE", 
  authDomain: "restaurante-fb-daniel.firebaseapp.com",
  projectId: "restaurante-fb-daniel",
  storageBucket: "restaurante-fb-daniel.appspot.com",
  messagingSenderId: "29829802611",
  appId: "1:29829802611:web:38dcb97ebfc613ff845806"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();