// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTf3i381AZZtlGLPbPUGevmvTNnilQrc4",
  authDomain: "tourntravel-8fcd7.firebaseapp.com",
  projectId: "tourntravel-8fcd7",
  storageBucket: "tourntravel-8fcd7.firebasestorage.app",
  messagingSenderId: "1002410592088",
  appId: "1:1002410592088:web:bb14c934d0bf50be23c72d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUp = document.getElementById("submitSignUp");
signUp.addEventListener("click", (event) => {
  event.preventDefault();
});
