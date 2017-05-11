(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .config(Configuration)

  /** @ngInject */
  function Configuration ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        abstract: true,
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeAbstractController',
        controllerAs: 'home_vm'
      })
      .state('home.search', {
        url: '/',
        views: {
          layoutContent: {
            templateUrl: 'app/components/search/search.html',
            controller: 'SearchController',
            controllerAs: 'search_vm'
          }
        }
      })

    $urlRouterProvider.otherwise('/');
  }

})();


