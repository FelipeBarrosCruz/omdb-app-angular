(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('LayoutAbstractController', LayoutAbstractController)


  /** @ngInject */
  function LayoutAbstractController ($log) {
    $log.info('LayoutAbstractController initialized on date: %s', new Date().toISOString());
  }

})();
