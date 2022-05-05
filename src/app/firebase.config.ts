// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlMTdd3zaiPzGr5JDmXXonD4o0KQRxAB8",
  authDomain: "fir-a1110.firebaseapp.com",
  projectId: "fir-a1110",
  storageBucket: "fir-a1110.appspot.com",
  messagingSenderId: "972910227360",
  appId: "1:972910227360:web:733ad6675bf9b3d31afec5",
  measurementId: "G-PCFQ72FK82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);