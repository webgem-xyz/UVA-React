import firebase from 'firebase/app';

require('firebase/auth');
require('firebase/database');

const fireApp = firebase.initializeApp({
  apiKey: 'AIzaSyA1FJ3bLQnN1fstX3ZjHrH7564qvFi-ahI',
  authDomain: 'uva-reactnativeapp.firebaseapp.com',
  databaseURL: 'https://uva-reactnativeapp.firebaseio.com',
  storageBucket: 'uva-reactnativeapp.appspot.com',
});

export default fireApp;
