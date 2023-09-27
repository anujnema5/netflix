// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKc9Dg5hhZ6HrXFPfJZWccEkAyjJJ4oig",
  authDomain: "netflixgpt-12e14.firebaseapp.com",
  projectId: "netflixgpt-12e14",
  storageBucket: "netflixgpt-12e14.appspot.com",
  messagingSenderId: "404894846786",
  appId: "1:404894846786:web:a8e2a2a82b44ce186002db",
  measurementId: "G-KLHMQE0119"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
const analytics = getAnalytics(app);