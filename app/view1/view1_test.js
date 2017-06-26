'use strict';

describe('twitterApp.view1 module', function() {

  beforeEach(module('twitterApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl', { $scope: $rootScope.$new() });
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
