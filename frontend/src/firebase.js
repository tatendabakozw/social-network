import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBQ-7-qLSRisFvrpHbJx1oruirLP7odLSc",
    authDomain: "discord-clone-44033.firebaseapp.com",
    projectId: "discord-clone-44033",
    storageBucket: "discord-clone-44033.appspot.com",
    messagingSenderId: "500057291506",
    appId: "1:500057291506:web:0be10eba33ba157af6ee6b",
    measurementId: "G-VWNH3EVV8P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{db, auth, provider}