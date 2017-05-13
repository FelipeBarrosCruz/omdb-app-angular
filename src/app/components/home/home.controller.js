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
      year: $location.search().year || null,
      page: 1
    };
    vm.onScrolling = false;
    vm.doSearch = doSearch;
    vm.onScrollPage = onScrollPage;

    (function construct() {
      if (vm.searchData.name) {
        doSearch();
      }
    })();

    function setQueryParams() {
      $location.search(vm.searchData);
    }

    function onScrollPage () {
      vm.searchData.page++;
      vm.onScrolling = true;
      return doSearch();
    }

    function doSearch () {
      setQueryParams();
      HomeService.doSearch(vm.searchData, function(err, list) {
        if (err) return;
        $log.info('List', list)
        vm.searchList = vm.searchList.concat(list);
        vm.onScrolling = !list.length;
        if (!list.length) {
          vm.searchData.page--;
          setQueryParams();
        }
      })
    }

  }

})();
