(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('SearchController', SearchController)


  /** @ngInject */
  function SearchController ($log) {
    $log.info('SearchController initialized on date: %s', new Date().toISOString());
  }

})();
