(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('_', lodashService);

  /** @ngInject */
  function lodashService ($window) {
    return $window['_'];
  }

})();
