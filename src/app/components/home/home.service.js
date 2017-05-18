(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('HomeService', HomeService)


  /** @ngInject */
  function HomeService ($log, WebAPI, async, FALLBACK_POSTER_IMG) {
    $log.info('HomeService initialized on date: %s', new Date().toISOString());

    function parseListResult (data, done) {
      if (!data.Response || !angular.isArray(data.Search)) return done(null, []);
      var result = [];
      var Tasks = [];

      data.Search.map(function (value) {
        return Tasks.push(function (next) {
          return searchByImdbId(value.imdbID, function onSearchByIdmbId (err, response) {
            if (err) return next(err);
            if (response.Poster === 'N/A') response.Poster = FALLBACK_POSTER_IMG;
            if (response) result.push(response);
            return next(null);
          });
        });
      });

      return async.parallel(Tasks, function onFinishTasks(err) {
        if (err) return done(err);
        return done(null, result);
      });
    }

    function searchByImdbId (imdbId, done) {
      return WebAPI.searchByImdbId(imdbId)
        .then(function (response) {
          $log.info('Response by imdbId [%s]', imdbId, response);
          return done(null, response.data);
        }).catch(function (err) {
          $log.error(err, 'Error when get result by imdbId');
          return done(err, null)
        })
    }
    function doSearch (params, done) {
      return WebAPI.advancedFilter(params)
        .then(function (response) {
          $log.info('Response list of search', response);
          return parseListResult(response.data, function onParsed (err, list) {
            return done(err, list);
          });
        }).catch(function (err) {
          $log.error(err, 'Error when get list of search');
          return done(err, null);
        });
    }

    return {
      doSearch: doSearch,
      searchByImdbId: searchByImdbId
    }
  }

})();
