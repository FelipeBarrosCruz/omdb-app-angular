(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('FavoriteController', FavoriteController)


  /** @ngInject */
  function FavoriteController ($log, FavoriteService) {
    $log.info('FavoriteController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.list = [];

    (function construct () {
      selectList();
    })();

    function selectList () {
      FavoriteService.select(function (err, list) {
        if (err) return;
        vm.list = list;
      })
    }
  }

})();
