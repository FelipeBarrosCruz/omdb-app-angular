(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('HomeService', HomeService)



  /** @ngInject */
  function HomeService ($log, WebAPI) {
    $log.info('HomeService initialized on date: %s', new Date().toISOString());

    function searchByImdbId (imdbId, done) {
      return WebAPI.searchByImdbId(imdbId)
        .then(function(response) {
          $log.info('Response by imdbId [%s]', imdbId, response);
          return done(null, response.data);
        }).catch(function(err) {
          $log.error(err, 'Error when get result by imdbId');
          return done(err, null)
        })
    }

    function doSearch (params, done) {
      return WebAPI.advancedFilter(params)
        .then(function(response) {
          $log.info('Response list of search', response);
          return done(null, response.data);
        }).catch(function(err) {
          $log.error(err, 'Error when get list of search');
          return done(err, null);
        })
    }

    return {
      doSearch: doSearch,
      searchByImdbId: searchByImdbId
    }
  }

})();
