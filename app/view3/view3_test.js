'use strict';

describe('twitterApp.view3 module', function() {

  beforeEach(module('twitterApp.view3'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      var view3Ctrl = $controller('View3Ctrl', { $scope: $rootScope.$new() });
      expect(view3Ctrl).toBeDefined();
    }));

  });
});
