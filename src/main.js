import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLEZaTaCFx58CW0OXWBh_FUd0ofTHWKbk",
  authDomain: "html5-standard.firebaseapp.com",
  projectId: "html5-standard",
  storageBucket: "html5-standard.appspot.com",
  messagingSenderId: "1048089935916",
  appId: "1:1048089935916:web:06ab8c424985d06613d189",
  measurementId: "G-JMFHHVTCKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createApp(App).mount('#app')
