import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDTVvBRuLM7jMu-7qspGdjCbhs7CbpDkU4",
    authDomain: "todo-app-7eb4c.firebaseapp.com",
    databaseURL: "https://todo-app-7eb4c.firebaseio.com",
    storageBucket: "todo-app-7eb4c.appspot.com",
    messagingSenderId: "486936228947"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
