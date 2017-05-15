(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('DetailController', DetailController)


  /** @ngInject */
  function DetailController ($log, $location, $stateParams, DetailService, FavoriteService) {
    $log.info('DetailController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.createInFavoriteList = createInFavoriteList;
    vm.removeInFavoriteList = removeInFavoriteList;
    vm.imdbId = $stateParams.imdbID;
    vm.result = null;
    vm.fieldsToShow = [
      'Plot',
      'Actors',
      'Year',
      'Genre',
      'Director',
      'imdbRating',
      'Awards'
    ];
    vm.mapFieldsToTranslateKey = {
      'Plot': 'DETAIL_LABEL_PLOT',
      'Actors': 'DETAIL_LABEL_ACTORS',
      'Year': 'DETAIL_LABEL_YEAR',
      'Genre': 'DETAIL_LABEL_GENRE',
      'Director': 'DETAIL_LABEL_DIRECTOR',
      'imdbRating': 'DETAIL_LABEL_RATING',
      'Awards': 'DETAIL_LABEL_AWARDS'
    };
    vm.actions = {
      add: false
    };
    
    (function construct () {
      $location.search({});
      getFullInfo();
      verifyAlreadyInFavoriteList();
    })();

    function getFullInfo () {
      return DetailService.getFullInfo(vm.imdbId, function (err, result) {
        if (err) return;
        vm.result = result;
      })
    }

    function verifyAlreadyInFavoriteList () {
      FavoriteService.getByImdbId(vm.imdbId, function (err, response) {
        if (err || !response) return vm.actions.add = true;
      })
    }

    function createInFavoriteList (result) {
      return FavoriteService.create(result, function (err, response) {
        if (err) return;
        return vm.actions.add = (response) ? false : true;
      })
    }

    function removeInFavoriteList (result) {
      return FavoriteService.remove(result, function (err, response) {
        if (err) return;
        return vm.actions.add = (response) ? true : false;
      })
    }

  }

})();
