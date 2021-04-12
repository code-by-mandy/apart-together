import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDmA4LNf8gL6Fc3PvTIYRb0iw7W8vDPmoU",
  authDomain: "mandypmarkh-covid-confidential.firebaseapp.com",
  databaseURL: "https://mandypmarkh-covid-confidential-default-rtdb.firebaseio.com",
  projectId: "mandypmarkh-covid-confidential",
  storageBucket: "mandypmarkh-covid-confidential.appspot.com",
  messagingSenderId: "282912379020",
  appId: "1:282912379020:web:a031287e7c28614f132ba9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
  
