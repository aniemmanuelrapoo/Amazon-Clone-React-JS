import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6s0-u5RJfHDogHUANy3rE-Ll5LFqnM8Q",
    authDomain: "aniemmanuel--clone-1b891.firebaseapp.com",
    projectId: "aniemmanuel--clone-1b891",
    storageBucket: "aniemmanuel--clone-1b891.appspot.com",
    messagingSenderId: "165264153628",
    appId: "1:165264153628:web:3ab06e9f2d0188dc96d3d9"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };