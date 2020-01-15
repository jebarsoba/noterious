'use strict';

angular.module('noterious', [
  'ui.router',
  'ngAnimate',
  'firebase',
  'noterious.common',
  'gridster'
])
  .constant('ENDPOINT_URI', 'https://noterious-thrakattak.firebaseio.com/')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/boards-challenge-2');

    $stateProvider
      .state('login', {
        url:'/login',
        templateUrl: 'app/login/login.tmpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .state('boards', {
        url:'/boards',
        templateUrl: 'app/boards/boards-mdv.tmpl.html',
        controller: 'BoardsCtrl',
        controllerAs: 'ctrl',
        resolve: {
          'currentUser': ['Auth', function (Auth) {
            return Auth.$requireSignIn();
          }]
        }
      })
      .state('notes', {
        url:'/boards/:boardId/notes',
        templateUrl: 'app/notes/notes-mdv.tmpl.html',
        controller: 'NotesCtrl',
        controllerAs: 'ctrl',
        resolve: {
          'currentUser': ['Auth', function (Auth) {
            return Auth.$requireSignIn();
          }]
        }
      })
      .state('boards-challenge-2', {
        url:'/boards-challenge-2',
        templateUrl: 'app/boards/boards-mdv-challenge-2.tmpl.html',
        controller: 'BoardsCtrl',
        controllerAs: 'ctrl',
        resolve: {
          'currentUser': ['Auth', function (Auth) {
            return Auth.$requireSignIn();
          }]
        }
      })
      .state('notes-challenge-2', {
        url:'/boards-challenge-2/:boardId/notes',
        templateUrl: 'app/notes/notes-mdv-challenge-2.tmpl.html',
        controller: 'NotesCtrlChallenge2',
        controllerAs: 'ctrl',
        resolve: {
          'currentUser': ['Auth', function (Auth) {
            return Auth.$requireSignIn();
          }]
        }
      })
    ;
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      event.preventDefault();
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    });
  })
;
