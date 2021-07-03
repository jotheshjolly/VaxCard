import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBxRESRlUqFdW_ZYjfKzcXMrZ_NkCrtCAA",
  authDomain: "vaxcard-2d391.firebaseapp.com",
  projectId: "vaxcard-2d391",
  storageBucket: "vaxcard-2d391.appspot.com",
  messagingSenderId: "500551316570",
  appId: "1:500551316570:web:8d21fc6f6579a88c55d463",
  measurementId: "G-J6XDMLW0V6"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;