// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7JlZoUOXJJbVqSpUX89UOZ5pwYB2I6A0",
  authDomain: "shop-489cf.firebaseapp.com",
  projectId: "shop-489cf",
  storageBucket: "shop-489cf.appspot.com",
  messagingSenderId: "432474760020",
  appId: "1:432474760020:web:8bda0d096f9ee7b3fddec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app