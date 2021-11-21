import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here;
  apiKey: "AIzaSyDud1vd92Zlml6CWlDi-PcHAuYhEoxrAIU",
  authDomain: "complaintforum-f603d.firebaseapp.com",
  projectId: "complaintforum-f603d",
  storageBucket: "complaintforum-f603d.appspot.com",
  messagingSenderId: "865185211903",
  appId: "1:865185211903:web:cfdea9f2a941c4321c33ca"
};
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

