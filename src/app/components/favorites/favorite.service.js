(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('FavoriteService', FavoriteService)



  /** @ngInject */
  function FavoriteService ($log) {
    $log.info('FavoriteService initialized on date: %s', new Date().toISOString());

    function add () {

    }

    return {
      add: add
    }
  }

})();
