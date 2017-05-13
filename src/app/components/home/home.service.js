(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('HomeService', HomeService)



  /** @ngInject */
  function HomeService ($log, WebAPI) {
    $log.info('HomeService initialized on date: %s', new Date().toISOString());

    function parseListResult (data, done) {
      if (!data.Response || !angular.isArray(data.Search)) return done([]);
      return done(data.Search);
    }

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
          return parseListResult(response.data, function onParsed(list) {
            return done(null, list);
          });
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
