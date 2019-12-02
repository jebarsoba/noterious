'use strict';

describe('Noterious: configuration', function () {

  describe('Boards route', function () {
    var $state,
      $rootScope,
      state = 'boards'
    
    beforeEach(inject(function(_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/boards/boards.tmpl.html', '');
    }));

    it('should respond to url', function () {
      expect($state.href(state)).toEqual('#/boards');
    });
  });

  beforeEach(module('noterious'));

  describe('Constant: noterious firebase endpoint', function () {

    var endpointUri;

    beforeEach(inject(function (_ENDPOINT_URI_) {
      endpointUri = _ENDPOINT_URI_;
    }));

    it('should be defined', function () {
      expect(endpointUri).toBeDefined();
    });

    it('should be secure', function () {
      expect(endpointUri).toContain("https://");
    });

  });
});
