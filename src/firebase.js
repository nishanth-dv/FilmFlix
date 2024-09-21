// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4hCjt41OtDvQKBMu_FVeO0lEu79e_y5g",
  authDomain: "film-flix-ce9ba.firebaseapp.com",
  projectId: "film-flix-ce9ba",
  storageBucket: "film-flix-ce9ba.appspot.com",
  messagingSenderId: "137787140664",
  appId: "1:137787140664:web:7b7979fdbe50d0086694cd",
  measurementId: "G-WL1WKF3QRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
