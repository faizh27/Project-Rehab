// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS2qiWyjIc1XrW6n6oGCPHfnfeAz6zB9Q",
  authDomain: "resolve-rehab-queue.firebaseapp.com",
  projectId: "resolve-rehab-queue",
  storageBucket: "resolve-rehab-queue.firebasestorage.app",
  messagingSenderId: "8080983677",
  appId: "1:8080983677:web:9a657d98b3ba8d51399314",
  measurementId: "G-JXVLMH2Y72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);