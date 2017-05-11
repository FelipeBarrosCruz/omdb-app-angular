(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .run(Run)

  /** @ngInject */
  function Run ($log) {
    $log.info('App running on date: %s', new Date().toISOString());
  }

})();


