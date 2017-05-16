(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('_', lodashService)
    .service('async', asyncService);

  /** @ngInject */
  function lodashService ($window) {
    return $window['_'];
  }
  
  /** @ngInject */
  function asyncService ($window) {
    return $window['async'];
  }

})();
