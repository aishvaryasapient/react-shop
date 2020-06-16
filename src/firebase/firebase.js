import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDcTkdtdDuvMkIn7B0GDc5X5gkrZJGWdqM",
    authDomain: "todos-tada.firebaseapp.com",
    databaseURL: "https://todos-tada.firebaseio.com",
    projectId: "todos-tada",
    storageBucket: "todos-tada.appspot.com",
    messagingSenderId: "56310606000",
    appId: "1:56310606000:web:e466ca731cc396e204f375",
    measurementId: "G-657ZFHZYMK"
};
firebase.initializeApp(config);
export const fb = firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;