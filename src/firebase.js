import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmCd9Zu9KbT4RiIboZlGT5ubfhihGbGyU",
  authDomain: "sorette-3f886.firebaseapp.com",
  projectId: "sorette-3f886",
  storageBucket: "sorette-3f886.appspot.com",
  messagingSenderId: "53166551123",
  appId: "1:53166551123:web:875d9ef0ab405e06c596a6",
  measurementId: "G-S0R7SS2CQR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;