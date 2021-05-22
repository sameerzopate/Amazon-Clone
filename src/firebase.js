import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBej4NT5duOp1x6ow1C1HGHLa57sCvso4E",
    authDomain: "clone-7e7f0.firebaseapp.com",
    projectId: "clone-7e7f0",
    storageBucket: "clone-7e7f0.appspot.com",
    messagingSenderId: "721650101403",
    appId: "1:721650101403:web:ed25556f0bcbfec148aa3e",
    measurementId: "G-S6Z34MH0RV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };