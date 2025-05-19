// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt3KNEqh-CXOo4mqcsbfTQR6Fsa7mpkfk",
  authDomain: "auth-assignment-project.firebaseapp.com",
  projectId: "auth-assignment-project",
  storageBucket: "auth-assignment-project.firebasestorage.app",
  messagingSenderId: "85310773233",
  appId: "1:85310773233:web:1c800cc7a41d1565291650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth =getAuth(app)