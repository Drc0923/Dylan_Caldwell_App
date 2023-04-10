export const environment = {
  production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADuAZDqInH4tSCf8IRvAqwyLu_cXoGha4",
  authDomain: "airbnb-app-4478a.firebaseapp.com",
  databaseURL: "https://airbnb-app-4478a-default-rtdb.firebaseio.com",
  projectId: "airbnb-app-4478a",
  storageBucket: "airbnb-app-4478a.appspot.com",
  messagingSenderId: "1015971412563",
  appId: "1:1015971412563:web:3ac357f8112148ba5f64a6",
  measurementId: "G-60F6EYG08X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
