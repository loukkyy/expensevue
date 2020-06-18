
import firebase from "firebase/app";

const configOptions = {
  apiKey: "AIzaSyBjLW_xS8oPK9a7RbJFWiw9BfMpFIxltrU",
    authDomain: "expensevue.firebaseapp.com",
    databaseURL: "https://expensevue.firebaseio.com",
    projectId: "expensevue",
    storageBucket: "expensevue.appspot.com",
    messagingSenderId: "703399455697",
    appId: "1:703399455697:web:dc2a1812241baeabb28ef0"
};

firebase.initializeApp(configOptions);