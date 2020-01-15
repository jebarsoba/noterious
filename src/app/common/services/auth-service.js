'use strict';

angular.module('noterious.common')
  .factory('Auth', function ($firebaseAuth, ENDPOINT_URI) {
    //Modify according to the template you can find on https://console.firebase.google.com/project/<your-app-name>/settings/general/
    var config = {
      apiKey: "apiKey",
      authDomain: "authDomain",
      databaseURL: "databaseURL",
      projectId: "projectId",
      storageBucket: "storageBucket",
      messagingSenderId: "messagingSenderId",
      appId: "appId"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  return $firebaseAuth(firebase.auth())
  })
;