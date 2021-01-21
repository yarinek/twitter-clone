import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByqvabmF0UR7lQbgRgKvVcczDLJ1_NRLM",
    authDomain: "twitter-clone-a995e.firebaseapp.com",
    projectId: "twitter-clone-a995e",
    storageBucket: "twitter-clone-a995e.appspot.com",
    messagingSenderId: "555543455986",
    appId: "1:555543455986:web:39f3733284266097c4486b",
    measurementId: "G-23PES2FNFN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db