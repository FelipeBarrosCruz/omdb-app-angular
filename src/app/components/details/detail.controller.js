(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('DetailController', DetailController)


  /** @ngInject */
  function DetailController ($log, $location, $stateParams, DetailService) {
    $log.info('DetailController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.imdbId = $stateParams.imdbID;
    vm.detail = null;
    
    (function construct () {
      $location.search({});
      getFullInfo();
    })();

    function getFullInfo () {
      return DetailService.getFullInfo(vm.imdbId, function (err, result) {
        if (err) return;
        vm.detail = result;
      })
    }

  }

})();
