(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .component('listView', {
      templateUrl: 'app/components/list-view/list-view.html',
      controller: controller,
      controllerAs: 'list_view_vm',
      bindings: {
        list: '<list',
        onScrolling: '='
      }
  })

  /** @ngInject */
  function controller ($log, $state) {
    $log.info('ListView initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.getMoreInformation = getMoreInformation;

    function getMoreInformation (result) {
      if (angular.isFunction(vm.onScrolling)) vm.onScrolling(true);
      return $state.go('layout.detail', {imdbID: result.imdbID, slug: result.Title});
    }
  }

})();
