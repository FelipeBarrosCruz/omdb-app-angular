(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .component('listView', {
      templateUrl: 'app/components/list-view/list-view.html',
      controller: controller,
      controllerAs: 'list_view_vm',
      bindings: {
        list: '<list'
      }
  })

  /** @ngInject */
  function controller ($log) {
    $log.info('ListView initialized on date: %s', new Date().toISOString());
    var vm = this;
  }

})();
