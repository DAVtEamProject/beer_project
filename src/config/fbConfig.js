import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDq_WyppjH1G6fa_8LwsKn8q8j-mnwt7yo",
  authDomain: "beer-project-59da5.firebaseapp.com",
  databaseURL: "https://beer-project-59da5.firebaseio.com",
  projectId: "beer-project-59da5",
  storageBucket: "beer-project-59da5.appspot.com",
  messagingSenderId: "954905924280"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
