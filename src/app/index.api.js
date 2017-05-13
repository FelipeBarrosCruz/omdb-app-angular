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

    function searchByImdbId (imdbId) {
      var query = { i: imdbId };
      return requestAPI(query);
    }

    function advancedFilter (params) {
      var mapTo = { name: 's', year: 'y', type: 'type', page: 'page'};
      var query = {};
      for (var key in params) {
        if (mapTo[key] && params[key]) query[mapTo[key]] = params[key]
      }
      return requestAPI(query);
    }

    return {
      searchByImdbId: searchByImdbId,
      advancedFilter: advancedFilter
    };
  }

})();

