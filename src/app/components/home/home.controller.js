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
      genre: $location.search().genre || null,
      page: 1
    };
    vm.scrolling = false;
    vm.doSearch = doSearch;
    vm.onScrollPage = onScrollPage;
    vm.onScrolling = onScrolling;

    (function construct () {
      if (vm.searchData.name) {
        doSearch();
      }
    })();

    function setQueryParams () {
      $location.search(vm.searchData);
    }

    function onScrolling (value) {
      vm.scrolling = value;
    }

    function onScrollPage () {
      vm.searchData.page++;
      vm.scrolling = true;
      return doSearch();
    }

    function doSearch () {
      setQueryParams();
      HomeService.doSearch(vm.searchData, function (err, list) {
        if (err) return;
        vm.searchList = vm.searchList.concat(list);
        vm.scrolling = !list.length;
        if (!list.length) {
          vm.searchData.page--;
          setQueryParams();
        }
      })
    }
  }

})();
