import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwjUB5kSjgOPngUspjZA25eMXVtI0GLOE",
  authDomain: "olhx-e3c2f.firebaseapp.com",
  projectId: "olhx-e3c2f",
  storageBucket: "olhx-e3c2f.appspot.com",
  messagingSenderId: "754845629519",
  appId: "1:754845629519:web:ceece26fa48f7c669f3e3a",
  measurementId: "G-V8JFBDZT4N"
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};