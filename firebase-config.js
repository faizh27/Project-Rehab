
// ====================================================================
const firebaseConfig = {
  apiKey: "AIzaSyBS2qiWyjIc1XrW6n6oGCPHfnfeAz6zB9Q",
  authDomain: "resolve-rehab-queue.firebaseapp.com",
  projectId: "resolve-rehab-queue",
  storageBucket: "resolve-rehab-queue.firebasestorage.app",
  messagingSenderId: "8080983677",
  appId: "1:8080983677:web:9a657d98b3ba8d51399314",
  measurementId: "G-JXVLMH2Y72"
};
// ====================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
