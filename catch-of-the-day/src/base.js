import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXFLq4HPqq_2Gkh2nXn87YL_SDSTarx5U",
  authDomain: "catch-of-the-day-mario-b.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mario-b.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;