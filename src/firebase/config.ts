import 'firebase/compat/auth';
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBOa-eZixbCAYJJ0dt-LdaADsIe4OJKQOs",
    authDomain: "e-commerce-svelte.firebaseapp.com",
    projectId: "e-commerce-svelte",
    storageBucket: "e-commerce-svelte.appspot.com",
    messagingSenderId: "1048129408846",
    appId: "1:1048129408846:web:7b93e971e3dd403c71581f"
  };
  
  firebase.initializeApp(firebaseConfig);
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider}