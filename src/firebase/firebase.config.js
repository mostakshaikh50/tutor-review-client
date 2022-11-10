// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DuEjTL7AaNWSYotLLJRekwV9l3jZDc0",
  authDomain: "assignment11-tutor.firebaseapp.com",
  projectId: "assignment11-tutor",
  storageBucket: "assignment11-tutor.appspot.com",
  messagingSenderId: "780362699204",
  appId: "1:780362699204:web:bcc16f81a439f1956f5491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;