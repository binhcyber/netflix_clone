import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDLtW-DWJEWzhTEku2OSGMHUdsWd7PBBxc",
  authDomain: "netflix-clone-86463.firebaseapp.com",
  projectId: "netflix-clone-86463",
  storageBucket: "netflix-clone-86463.appspot.com",
  messagingSenderId: "581256646486",
  appId: "1:581256646486:web:d5aa7261a05b8bc1a390f7",
  measurementId: "G-L5600L6FFV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
