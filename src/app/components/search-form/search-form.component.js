(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .component('searchForm', {
      templateUrl: 'app/components/search-form/search-form.html',
      controller: controller,
      controllerAs: 'search_form_vm',
      bindings: {
        list: '=',
        searchData: '=',
        doSearch: '='
      }
  })

  /** @ngInject */
  function controller ($log, _, $location) {
    $log.info('SearchForm Component initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.onChangeSearchData = onChangeSearchData;

    function onChangeSearchData () {
      var query = {}
      for (var property in vm.searchData) {
        if (vm.searchData[property]) query[property.toLowerCase()] = vm.searchData[property];
      }
      $location.search(query)
    }
  }

})();
