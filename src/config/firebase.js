import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYzPZZ4CDRP-02B8hUgOvlaGEDmWkSda4",
  authDomain: "sememories-2016.firebaseapp.com",
  databaseURL: "https://sememories-2016.firebaseio.com",
  projectId: "sememories-2016",
  storageBucket: "sememories-2016.appspot.com",
  messagingSenderId: "748679580722",
  appId: "1:748679580722:web:17fe44be9fdebe3b62802b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth;
export const storage = firebase.storage;
export const database = firebase.database;
