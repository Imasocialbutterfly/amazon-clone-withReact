import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEh6gK2xnEVoRU05IHg3tzYVlWjfxOP8s",
    authDomain: "zaio--react.firebaseapp.com",
    projectId: "zaio--react",
    storageBucket: "zaio--react.appspot.com",
    messagingSenderId: "320526648930",
    appId: "1:320526648930:web:8979ca1d0ce505ecb3733b",
    measurementId: "G-MYCF87K77K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export { db, auth };