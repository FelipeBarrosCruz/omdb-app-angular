(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('HomeController', HomeController)


  /** @ngInject */
  function HomeController ($log) {
    $log.info('HomeController initialized on date: %s', new Date().toISOString());
  }

})();
