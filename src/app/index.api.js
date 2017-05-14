(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('WebAPI', WebAPI)

  /** @ngInject */
  function WebAPI ($log, OMDB_API_URL, MOVIEDB_API_URL, MOVIEDB_API_KEY, $http, _) {

    (function construct() {
      $log.info('WebAPI running on date: %s', new Date().toISOString())
    })();

    function buildMovieDBConfig (uriParams, queryParams) {
      var query = _.extend(queryParams || {}, {api_key: MOVIEDB_API_KEY})
      var uri = angular.isArray(uriParams)
              ? uriParams.join('/')
              : angular.isString(uriParams)
              ? uriParams
              : ''
      return { url: MOVIEDB_API_URL.concat(uri), query: query };
    }

    function requestOMDBAPI (params) {
      params = _.extend(params, { plot: 'full' })
      return $http({
        method: 'GET',
        url: OMDB_API_URL,
        params: params
      });
    }

    function searchByImdbId (imdbId) {
      var query = { i: imdbId };
      return requestOMDBAPI(query);
    }

    function advancedFilter (params) {
      var mapTo = { name: 's', year: 'y', type: 'type', page: 'page'};
      var query = {};
      for (var key in params) {
        if (mapTo[key] && params[key]) query[mapTo[key]] = params[key];
      }
      return requestOMDBAPI(query);
    }

    function getDetailsByImdbId (imdbId) {
      var query = { i: imdbId };
      return requestOMDBAPI(query);
    }

    function getVideosByImdbId (imdbId) {
      var config = buildMovieDBConfig([imdbId, 'videos']);
      return $http({
        method: 'GET',
        url: config.url,
        params: config.query
      });
    }

    return {
      searchByImdbId: searchByImdbId,
      advancedFilter: advancedFilter,
      getDetailsByImdbId: getDetailsByImdbId,
      getVideosByImdbId: getVideosByImdbId
    };
  }

})();

