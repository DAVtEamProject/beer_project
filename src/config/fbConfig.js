import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// to make it work pick ou here the configuration from firebase
var config = {};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
