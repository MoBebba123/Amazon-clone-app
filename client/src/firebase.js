// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3y_EoG7thcuRkSR08m2nBy3se_nni48M",
  authDomain: "fir-f4fa6.firebaseapp.com",
  projectId: "fir-f4fa6",
  storageBucket: "fir-f4fa6.appspot.com",
  messagingSenderId: "32086843024",
  appId: "1:32086843024:web:d5a9b6a79904022fbf4215",
  measurementId: "G-EMT012P6Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app