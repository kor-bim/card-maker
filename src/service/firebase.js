// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCLhmQL8wA10z0tj1B7hB8T8DPgQc8Um3A",
    authDomain: "business-card-maker-e939e.firebaseapp.com",
    databaseURL: "https://business-card-maker-e939e-default-rtdb.firebaseio.com",
    projectId: "business-card-maker-e939e",
    storageBucket: "business-card-maker-e939e.appspot.com",
    messagingSenderId: "879332318457",
    appId: "1:879332318457:web:f83ca3a2875f8d079d9628",
    measurementId: "G-GXVGJPBRL0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);