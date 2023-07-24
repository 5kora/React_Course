// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'; // Notice the '/compat' added here
import 'firebase/compat/auth'; // Update other Firebase modules similarly
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPGI9tqA2uXq5eEGLlxswAM3ic9s8BU9E",
  authDomain: "miniblog-d1a9b.firebaseapp.com",
  projectId: "miniblog-d1a9b",
  storageBucket: "miniblog-d1a9b.appspot.com",
  messagingSenderId: "814014181810",
  appId: "1:814014181810:web:fb2e3d619482fabf3b34ab"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}