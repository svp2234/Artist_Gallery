// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkqXBIBojTqzltVho1HX3Wy-sUy5s53Hc",
  authDomain: "photo-app-117db.firebaseapp.com",
  projectId: "photo-app-117db",
  storageBucket: "photo-app-117db.appspot.com",
  messagingSenderId: "27388166788",
  appId: "1:27388166788:web:fbd9fcc058320c39f078d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };