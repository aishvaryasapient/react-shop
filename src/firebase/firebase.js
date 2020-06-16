import firebase from 'firebase';
const config = {
    
};
firebase.initializeApp(config);
export const fb = firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;