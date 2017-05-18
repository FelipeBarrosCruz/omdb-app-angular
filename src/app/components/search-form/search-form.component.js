(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .component('searchForm', {
      templateUrl: 'app/components/search-form/search-form.html',
      controller: controller,
      controllerAs: 'search_form_vm',
      bindings: {
        searchData: '=',
        doSearch: '='
      }
  })

  /** @ngInject */
  function controller ($log, _) {
    $log.info('SearchForm Component initialized on date: %s', new Date().toISOString());
    var vm = this;
    var searchData = { name: null, year: null, genre: null };
    
    (function construct() {
      if (!angular.isObject(vm.searchData)) vm.searchData = {};
      vm.searchData = _.extend(vm.searchData, searchData);
    })();
  }

})();
