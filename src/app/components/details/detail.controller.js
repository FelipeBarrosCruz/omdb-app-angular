(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .controller('DetailController', DetailController)


  /** @ngInject */
  function DetailController ($log, $location, $stateParams, DetailService) {
    $log.info('DetailController initialized on date: %s', new Date().toISOString());
    var vm = this;
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
    
    (function construct () {
      $location.search({});
      getFullInfo();
    })();

    function getFullInfo () {
      return DetailService.getFullInfo(vm.imdbId, function (err, result) {
        if (err) return;
        vm.result = result;
      })
    }

  }

})();
