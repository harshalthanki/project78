import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAbOSDcevJiNpc0KLQ_ZZgYDEvN6po1Jt0",
    authDomain: "project78-dae7c.firebaseapp.com",
    projectId: "project78-dae7c",
    storageBucket: "project78-dae7c.appspot.com",
    messagingSenderId: "463047608426",
    appId: "1:463047608426:web:9abc34356b764bcf40a213"
  };
  




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


