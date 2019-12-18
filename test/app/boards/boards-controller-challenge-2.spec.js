'use strict';

describe('Controller: BoardsCtrl', function () {
  beforeEach(module('noterious'));

  var scope,
      httpBackend,
      BoardsCtrl,
      mockBoardsModel,
      mockBoards = {
        "-Lw0LkIreee9ixjq9bqC" : {
          "description" : "Board 1 asd",
          "isPublic" : false,
          "title" : "Board 1"
        },
        "-Lw0LlhmJvDwZusMlw8X" : {
          "description" : "Board 2",
          "isPublic" : false,
          "title" : "Board 2"
        }
      };

  beforeEach(inject(function ($rootScope, $controller, $q, $httpBackend) {
    httpBackend = $httpBackend;

    scope = $rootScope.$new();

    var createPromise = function(returnData) {
      var deferred = $q.defer();
      deferred.resolve(returnData);
      return deferred.promise;
    };

    mockBoardsModel = {
      all: function () {
        return createPromise(mockBoards)
      },
      create: function(create) {
        return createPromise({});
      },
      update: function(boardId, board) {
        return createPromise({});
      },
      destroy: function(boardId) {
        return createPromise({});
      }
    };

    BoardsCtrl = $controller('BoardsCtrl', {
      currentUser: {},
      BoardsModel: mockBoardsModel
    });
  }));

  it('should get all boards', function () {
    httpBackend.when('GET', 'app/boards/boards-mdv-challenge-2.tmpl.html').respond({});
    scope.$apply();

    expect(BoardsCtrl.boards).toBe(mockBoards);
  });
});