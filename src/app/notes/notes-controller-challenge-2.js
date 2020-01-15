'use strict';

angular.module('noterious')
  .controller('NotesCtrlChallenge2', function ($stateParams) {
    var ctrl = this;

    ctrl.title = 'Notes';
    ctrl.boardId = $stateParams.boardId;
  });
