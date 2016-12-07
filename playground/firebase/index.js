import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDTVvBRuLM7jMu-7qspGdjCbhs7CbpDkU4",
  authDomain: "todo-app-7eb4c.firebaseapp.com",
  databaseURL: "https://todo-app-7eb4c.firebaseio.com",
  storageBucket: "todo-app-7eb4c.appspot.com",
  messagingSenderId: "486936228947"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Giuseppe',
    age: 44
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Walk the dog!'});
todosRef.push({text: 'Clean the yard!'});


// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);
//
// firebaseRef.off('value', logData); // se vogliamo spegnere quel listener altrimenti off()
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.child('app').update({name: 'Todo Application'});
//
// firebaseRef.child('user').update({name: 'Antonio'});

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('isRunning').remove();
// firebaseRef.child('user').update({age: null});

//Soluzione 1
// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Antonio'
// });

//Soluzione 2
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Antonio'
// });


// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application' //Multipaht upadte
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });

// .then(() => {
//   console.log('Set worked!');
// }, (e) => {
//   console.log('Set failed!');
// })

// firebaseRef.set({
//   appName: 'Todo Application'
// });

// firebaseRef.child('user').set({
//   name: 'Antonio'
// });
//
// firebaseRef.child('app').set({
//   name: 'Todo App'
// });
