(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('HomeController', HomeController)


  /** @ngInject */
  function HomeController ($log, HomeService, $location, _) {
    $log.info('HomeController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.searchList = [];
    vm.searchData = {
      Title: $location.search().title || '',
      Year: $location.search().year || '',
      Genre: $location.search().genre || ''
    };
    vm.page = $location.search().page || 1;
    vm.scrolling = false;
    vm.doSearch = doSearch;
    vm.onScrollPage = onScrollPage;
    vm.onScrolling = onScrolling;

    (function construct () {
      if (vm.searchData.Title) {
        doSearch();
      }
    })();

    function setQueryParams () {
      var query = { page: vm.page }
      for (var property in vm.searchData) {
        if (vm.searchData[property]) query[property.toLowerCase()] = vm.searchData[property];
      }
      $location.search(query);
    }

    function onScrolling (value) {
      vm.scrolling = value;
    }

    function onScrollPage () {
      vm.page++;
      vm.scrolling = true;
      return doSearch();
    }

    function doSearch () {
      setQueryParams();
      var data = _.extend(_.clone(vm.searchData), { page: vm.page });
      HomeService.doSearch(data, function (err, list) {
        if (err) return;
        vm.searchList = vm.searchList.concat(list);
        vm.scrolling = !list.length;
        if (!list.length) {
          vm.page--;
          setQueryParams();
        }
      })
    }
  }

})();
