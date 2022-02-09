import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCHj6I_COLNKidjYGlcdmfoXreZF3TP_-k",
  authDomain: "fir-test-caabd.firebaseapp.com",
  databaseURL: "https://fir-test-caabd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-test-caabd",
  storageBucket: "fir-test-caabd.appspot.com",
  messagingSenderId: "380566863502",
  appId: "1:380566863502:web:fc55dda5cf98afafa653df",
  measurementId: "G-XP5F745PEM"};

firebase.initializeApp(config);

export default firebase.database();
