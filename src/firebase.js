import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAIMLbWl2fm5oxkG9NXABTFtRhurfMiAas",
    authDomain: "unichat-c2c63.firebaseapp.com",
    projectId: "unichat-c2c63",
    storageBucket: "unichat-c2c63.appspot.com",
    messagingSenderId: "1032672670342",
    appId: "1:1032672670342:web:338fd3e254c7bdaeded707"
  }).auth();
