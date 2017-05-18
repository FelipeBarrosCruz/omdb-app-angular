(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('FavoriteController', FavoriteController)


  /** @ngInject */
  function FavoriteController ($log, FavoriteService, $location) {
    $log.info('FavoriteController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.list = [];
    vm.searchData = {
      name: $location.search().name || null,
      year: $location.search().year || null,
      genre: $location.search().genre || null,
      page: 1
    };

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
