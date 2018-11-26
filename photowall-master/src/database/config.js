 import * as firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyDGqifcA23SnkSUTfTvXxftDQTS-xpkjAM",
    authDomain: "photowall-d496d.firebaseapp.com",
    databaseURL: "https://photowall-d496d.firebaseio.com",
    projectId: "photowall-d496d",
    storageBucket: "photowall-d496d.appspot.com",
    messagingSenderId: "548796499785"
  };

  firebase.initializeApp(config);

  const database = firebase.database()

  export {database}