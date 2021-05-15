import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD2VggmQX6aS7891qjL-IsDmhmMrbi3pJw",
  authDomain: "post-its-103b1.firebaseapp.com",
  databaseURL: "https://post-its-103b1-default-rtdb.firebaseio.com",
  projectId: "post-its-103b1",
  storageBucket: "post-its-103b1.appspot.com",
  messagingSenderId: "492789366845",
  appId: "1:492789366845:web:c4422c3c2a8fa843aa2a54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
  
