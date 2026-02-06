// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxxY9yq7zlNGfL2ki4FHhYWeuBR3rp9VE",
  authDomain: "contact-app-bb473.firebaseapp.com",
  projectId: "contact-app-bb473",
  storageBucket: "contact-app-bb473.firebasestorage.app",
  messagingSenderId: "435425209331",
  appId: "1:435425209331:web:c0e301ebbff63adb3d4086",
  measurementId: "G-S7B6ZQ6LJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}