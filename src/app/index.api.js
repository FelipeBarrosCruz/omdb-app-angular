(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('WebAPI', WebAPI)

  /** @ngInject */
  function WebAPI ($log, API_URL, $http) {

    (function construct() {
      $log.info('WebAPI running on date: %s', new Date().toISOString())
    })();

    function requestAPI (params) {
      params.plot = params.plot || 'full';
      return $http({
        method: 'GET',
        url: API_URL,
        params: params
      });
    }

    function searchByName (name) {
      var query = { s: name };
      return requestAPI(query);
    }

    function advancedFilter (params) {
      var mapTo = { name: 's', year: 'y', type: 'type' };
      var query = {};
      for (var key in params) {
        if (mapTo[key]) query[mapTo[key]] = params[key]
      }
      return requestAPI(query);
    }

    return {
      searchByName: searchByName,
      advancedFilter: advancedFilter
    };
  }

})();

