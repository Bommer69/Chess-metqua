// src/FireBase/config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
        apiKey: "AIzaSyC1-eDl1_ItClPjXqT0gsZN0mCDfGSOdZs",
        authDomain: "chess-game-60b9a.firebaseapp.com",
        projectId: "chess-game-60b9a",
        storageBucket: "chess-game-60b9a.firebasestorage.com",
        messagingSenderId: "387638157548",
        appId: "1:387638157548:web:c9d9fdefeb8525bc1d05c9",
        measurementId: "G-5SZ4SCL14W"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;
