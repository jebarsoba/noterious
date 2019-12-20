'use strict';

angular.module('noterious.common')
  .service('BoardsModelChallenge3', function ($q) {
    var service = this,
        boards = {
          "-Lw0LkIreee9ixjq9bqC" : {
            "description" : "Board 1 (from BoardsModelChallenge3)",
            "isPublic" : false,
            "title" : "Board 1"
          },
          "-Lw0LlhmJvDwZusMlw8X" : {
            "description" : "Board 2 (from BoardsModelChallenge3)",
            "isPublic" : false,
            "title" : "Board 2"
          }
        };

    service.all = function () {
      var deferred = $q.defer();

      deferred.resolve(boards);

      return deferred.promise;
    };
  });