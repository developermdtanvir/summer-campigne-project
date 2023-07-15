
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId:process.env.appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAB9cycmmyDC9G0wUsTJjSTOVFjVjJjQzk",
  authDomain: "summer-campigne.firebaseapp.com",
  projectId: "summer-campigne",
  storageBucket: "summer-campigne.appspot.com",
  messagingSenderId: "460435896181",
  appId: "1:460435896181:web:198d215afa25c8e60c853c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);