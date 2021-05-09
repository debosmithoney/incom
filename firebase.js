import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdfuSWVnAZUSqzld5d8ykt29mhdHytVVE",
    authDomain: "in-com-73bed.firebaseapp.com",
    projectId: "in-com-73bed",
    storageBucket: "in-com-73bed.appspot.com",
    messagingSenderId: "1001566036920",
    appId: "1:1001566036920:web:e6cc61e9cb2fa25a7c654d",
    measurementId: "G-JQ5ENP3K6J"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };