(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .component('orderList', {
      templateUrl: 'app/components/order-list/order-list.html',
      controller: controller,
      controllerAs: 'order_list_vm',
      bindings: {
        list: '='
      }
  })

  /** @ngInject */
  function controller ($log, _) {
    $log.info('OrderList Component initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.doOrderBy = doOrderBy;

    function doOrderBy () {
      vm.list = _.reverse(_.sortBy(vm.list, function(result) {
        return result[vm.orderBy];
      }))
    }
  }

})();
