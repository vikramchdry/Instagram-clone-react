import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBM7xcCeCH-8aK51p4Lvw4KA0fBGLXyMj0",
    authDomain: "instagram-clone-ea67b.firebaseapp.com",
    databaseURL: "https://instagram-clone-ea67b-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-ea67b",
    storageBucket: "instagram-clone-ea67b.appspot.com",
    messagingSenderId: "337660900878",
    appId: "1:337660900878:web:02c0445463c557f2f2ee5f",
    measurementId: "G-BMEM1LDDRE"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };

//export default firebaseConfig;

