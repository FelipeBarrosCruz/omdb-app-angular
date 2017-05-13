(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('HomeController', HomeController)


  /** @ngInject */
  function HomeController ($log, HomeService, ngDexie) {
    $log.info('HomeController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.searchData = {
      name: null,
      year: null
    };
    vm.doSearch = doSearch;


    function doSearch () {
      var note = {id:1, title:'just an title', action: 'create more documentation' };

      ngDexie.put('notes', note).then(function(){
        alert('Saved my note');
      });
      // HomeService.doSearch(vm.searchData, function(err, list) {
      //   if (err) return;
      //   $log.info('List', list)
      // })
    }

  }

})();
