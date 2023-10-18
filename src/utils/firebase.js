// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4pFlIjojEAxpB6qVV4WR1udP6YIu_2e8",
  authDomain: "netflixgpt-d1e84.firebaseapp.com",
  projectId: "netflixgpt-d1e84",
  storageBucket: "netflixgpt-d1e84.appspot.com",
  messagingSenderId: "288204446327",
  appId: "1:288204446327:web:d5593b2025f3557fa80472",
  measurementId: "G-JCNKJN6C61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();