import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBuwNvvsS7rLPJ7Zefiok9brNSM18dKALI",
    authDomain: "crud-firestore-e69a8.firebaseapp.com",
    databaseURL: "https://crud-firestore-e69a8.firebaseio.com",
    projectId: "crud-firestore-e69a8",
    storageBucket: "crud-firestore-e69a8.appspot.com",
    messagingSenderId: "73579623366",
    appId: "1:73579623366:web:c7e0d68b981dc1e9e038c7",
    measurementId: "G-C2CYJ0QVB9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;