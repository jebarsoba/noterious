'use strict';

describe('Model: BoardsModelChallenge3', function () {
  beforeEach(module('noterious.common'));

  var scope,
      localBoardsModelChallenge3,
      expectedBoards = {
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

  beforeEach(inject(function ($rootScope, BoardsModelChallenge3) {
    scope = $rootScope.$new();

    localBoardsModelChallenge3 = BoardsModelChallenge3;
  }));

  it('should get all boards', function (done) {
    localBoardsModelChallenge3.all()
      .then(function (boards) {
        expect(boards).toEqual(expectedBoards);
        
        done();
      });

    scope.$apply();
  });
});