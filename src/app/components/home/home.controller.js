(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('HomeAbstractController', HomeAbstractController)


  /** @ngInject */
  function HomeAbstractController ($log) {
    $log.info('HomeAbstractController initialized on date: %s', new Date().toISOString());
  }

})();
