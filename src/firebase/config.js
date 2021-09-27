import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAagYxf2jT1CKkg8ka4W16S5zanxX76nL0",
    authDomain: "livechatting-911b2.firebaseapp.com",
    projectId: "livechatting-911b2",
    storageBucket: "livechatting-911b2.appspot.com",
    messagingSenderId: "980161957507",
    appId: "1:980161957507:web:080c71e9aeefe27939d5b6"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp

  export{db,auth,timestamp}