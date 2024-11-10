import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXqGT1iRDx8dK2qNBN0dJsj7Fl-I9LNFE",
  authDomain: "appsobdemanda-70bc3.firebaseapp.com",
  projectId: "appsobdemanda-70bc3",
  storageBucket: "appsobdemanda-70bc3.firebasestorage.app",
  messagingSenderId: "513849084976",
  appId: "1:513849084976:web:41b82efb198a4f31fa31f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);