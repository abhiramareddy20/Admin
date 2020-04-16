import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCF19slkNFJCRjSZesG1CZQM_2ZAphBsgQ",
    authDomain: "admin-new-868d4.firebaseapp.com",
    databaseURL: "https://admin-new-868d4.firebaseio.com",
    projectId: "admin-new-868d4",
    storageBucket: "admin-new-868d4.appspot.com",
    messagingSenderId: "1042470945811",
    appId: "1:1042470945811:web:738cc7db56ca5affdaebe6",
    measurementId: "G-1L3SKRZXEC"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;