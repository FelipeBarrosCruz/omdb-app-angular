(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('DetailService', DetailService)



  /** @ngInject */
  function DetailService ($log, WebAPI) {
    $log.info('DetailService initialized on date: %s', new Date().toISOString());

    function getFullInfo (imdbId, done) {
      return WebAPI.getDetailsByImdbId(imdbId)
        .then(function (response) {
          $log.info('Response full info by imdbId [%s]', imdbId, response);
          return done(null, response.data);
        }).catch(function (err) {
          $log.error(err, 'Error when get full info by imdbId');
          return done(err, null)
        });
    }

    function searchVideos (imdbId, done) {
      return WebAPI.getVideosByImdbId(imdbId)
        .then(function (response) {
          $log.info('Response videos by imdbId [%s]', imdbId, response);
          return done(null, response.data);
        }).catch(function (err) {
          $log.error(err, 'Error when get videos by imdbId');
          return done(err, null);
        });
    }

    return {
      getFullInfo: getFullInfo,
      searchVideos: searchVideos
    }
  }

})();
