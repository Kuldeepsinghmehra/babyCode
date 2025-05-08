import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig={
    apiKey:"AIzaSyApOhqggcVAqaE5FF2b8eLqsCKyktEuSEE",
    authDomain:"babycode-5f04a.firebaseapp.com",
    projectId: "babycode-5f04a",
    storageBucket: "babycode-5f04a.firebasestorage.app",
    messagingSenderId: "1090895191484",
    appId: "1:1090895191484:web:bdab97851f502361729fb9",
    measurementId: "G-0DWZ7KWP00"
}
const app=initializeApp(firebaseConfig) 
const analytics=getAnalytics(app)