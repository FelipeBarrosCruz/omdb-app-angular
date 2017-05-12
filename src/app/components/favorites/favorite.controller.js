(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('FavoriteController', FavoriteController)


  /** @ngInject */
  function FavoriteController ($log) {
    $log.info('FavoriteController initialized on date: %s', new Date().toISOString());
  }

})();
