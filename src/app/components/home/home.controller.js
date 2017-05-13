(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('HomeController', HomeController)


  /** @ngInject */
  function HomeController ($log, HomeService, $location) {
    $log.info('HomeController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.searchList = [];
    vm.searchData = {
      name: $location.search().name || null,
      year: $location.search().year || null
    };
    vm.doSearch = doSearch;


    (function construct() {
      if (vm.searchData.name) {
        doSearch();
      }
    })();

    function doSearch () {
      $location.search(vm.searchData);
      HomeService.doSearch(vm.searchData, function(err, list) {
        if (err) return;
        $log.info('List', list)
        vm.searchList = list;
      })
    }

  }

})();
