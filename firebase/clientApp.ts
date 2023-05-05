import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCocYIIOK2oi-T4GuO2tU6pYaWs4MFwVf4",
  authDomain: "photographer-f7142.firebaseapp.com",
  projectId: "photographer-f7142",
  storageBucket: "photographer-f7142.appspot.com",
  messagingSenderId: "844514207620",
  appId: "1:844514207620:web:75d2f2e0c7d5b372869fd1",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
