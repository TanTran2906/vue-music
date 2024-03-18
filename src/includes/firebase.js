// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYjLLMwIr5olrrfbHh1Ss__EihPiWEGGc",
    authDomain: "music-65f2a.firebaseapp.com",
    databaseURL: "https://music-65f2a-default-rtdb.firebaseio.com",
    projectId: "music-65f2a",
    storageBucket: "music-65f2a.appspot.com",
    messagingSenderId: "1058671499783",
    appId: "1:1058671499783:web:4159e9b4816fab8893a8a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.firestore()

const usersCollection = database.collection('users')

export { auth, database, usersCollection }