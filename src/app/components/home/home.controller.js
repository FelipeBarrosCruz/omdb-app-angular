(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('HomeController', HomeController)


  /** @ngInject */
  function HomeController ($log, HomeService, ngDexie) {
    $log.info('HomeController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.searchData = {
      name: null,
      year: null
    };
    vm.doSearch = doSearch;


    function doSearch () {
      HomeService.doSearch(vm.searchData, function(err, list) {
        if (err) return;
        $log.info('List', list)
      })
    }

  }

})();
