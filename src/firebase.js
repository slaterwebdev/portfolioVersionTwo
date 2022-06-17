import { initializeApp } from 'firebase/app';
import {
  getFirestore , collection, addDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnHJKizUHIgESeBKHiMrxXpiaRcWa7hgo",
  authDomain: "portfoliov2-55b13.firebaseapp.com",
  projectId: "portfoliov2-55b13",
  storageBucket: "portfoliov2-55b13.appspot.com",
  messagingSenderId: "14412386142",
  appId: "1:14412386142:web:d7283f054fb5de1329c9cf"
};

//initilize firebase app
initializeApp(firebaseConfig);

//initilize Services
const db = getFirestore();

  
const sendData = (blog) => {
  //Collection Reference 
  const colRef = collection(db, 'messages');

  //Adding a document to the firestore Db collection
  addDoc(colRef, {
    email: blog.email,
    message: blog.message,
    name: blog.name,
    number: blog.number 
  });

};

export default sendData;