
export const environment = {
  production: true
};

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJIH83gdJh5Ahm2Jme0ST7cOHpeKsHkYQ",
  authDomain: "red-de-cooperativas.firebaseapp.com",
  projectId: "red-de-cooperativas",
  storageBucket: "red-de-cooperativas.appspot.com",
  messagingSenderId: "755221248278",
  appId: "1:755221248278:web:f76ae86c042524a9873837",
  measurementId: "G-FWD74FSGC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

