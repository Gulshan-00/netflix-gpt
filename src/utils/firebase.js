// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP_XrOPjeC1zUruXCzJN4WD0JrfUmFTFI",
  authDomain: "netflixgpt-a0068.firebaseapp.com",
  projectId: "netflixgpt-a0068",
  storageBucket: "netflixgpt-a0068.appspot.com",
  messagingSenderId: "424993701498",
  appId: "1:424993701498:web:ea21edb38ca37630e685c3",
  measurementId: "G-287DFHE7K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);