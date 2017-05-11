(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('WebAPI', WebAPI)

  /** @ngInject */
  function WebAPI ($log, API_URL, $http) {

    return {};
  }

})();

