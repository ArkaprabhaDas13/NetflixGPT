// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZJyCpBys4j6hlFUCLLnksxGEPNXTTRg8",
  authDomain: "netflixgpt-36cad.firebaseapp.com",
  projectId: "netflixgpt-36cad",
  storageBucket: "netflixgpt-36cad.appspot.com",
  messagingSenderId: "435380544382",
  appId: "1:435380544382:web:c08d371ed282ef45cb892f",
  measurementId: "G-237GV0B40W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);