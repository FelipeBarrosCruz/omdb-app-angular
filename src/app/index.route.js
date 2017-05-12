(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .config(Configuration)

  /** @ngInject */
  function Configuration ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('layout', {
        abstract: true,
        templateUrl: 'app/components/layout/layout.html',
        controller: 'LayoutAbstractController',
        controllerAs: 'layout_vm'
      })
      .state('layout.home', {
        url: '/',
        views: {
          layoutContent: {
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home_vm'
          }
        }
      })
      .state('layout.favorites', {
        url: '/favorites',
        views: {
          layoutContent: {
            templateUrl: 'app/components/favorites/favorite.html',
            controller: 'FavoriteController',
            controllerAs: 'favorite_vm'
          }
        }
      })

    $urlRouterProvider.otherwise('/');
  }

})();


