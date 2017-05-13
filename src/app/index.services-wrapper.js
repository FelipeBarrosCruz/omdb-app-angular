(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('lodash', lodashService);


  /** @ngInject */
  function lodashService ($window) {
    $window['_'];
  }

})();
