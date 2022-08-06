import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7CzvmTmlC-ByOx1w5NT5hLt1EuUAePus",
    authDomain: "fir-todo-ddbf6.firebaseapp.com",
    projectId: "fir-todo-ddbf6",
    storageBucket: "fir-todo-ddbf6.appspot.com",
    messagingSenderId: "181833437727",
    appId: "1:181833437727:web:b633620e29765365c57b2a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };