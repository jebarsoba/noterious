'use strict';

angular.module('noterious.common')
  .factory('Auth', function ($firebaseAuth, ENDPOINT_URI) {
    var config = {
      apiKey: "AIzaSyAPI_yAKa4WGLX6NaF-4CVkBBRyK5LE160",
      authDomain: "noterious-thrakattak.firebaseapp.com",
      databaseURL: "https://noterious-thrakattak.firebaseio.com",
      projectId: "noterious-thrakattak",
      storageBucket: "noterious-thrakattak.appspot.com",
      messagingSenderId: "42812110896",
      appId: "1:42812110896:web:b8e222bb17929532e8d5f5"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  return $firebaseAuth(firebase.auth())
  })
;