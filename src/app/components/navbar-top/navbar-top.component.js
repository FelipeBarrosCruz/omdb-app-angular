(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .directive('navbarTop', navbarTopDirective);

  /** @ngInject */
  function navbarTopDirective ($window) {
    return {
      templateUrl: 'app/components/navbar-top/navbar-top.html',
      link: link($window),
      controller: controller,
      controllerAs: 'navbar_top_vm'
    };
  }

  /** @ngInject */
  function link ($window) {
    return function ($scope, $element) {
      var pageUrl = $window.location.href.substr($window.location.href.lastIndexOf('/')+1)
      var $ = angular.element($element)
      $.find('.navbar-nav li').click(function(){
        angular.element(this).addClass('active');
        angular.element(this).parent().children('li').not(this).removeClass('active');
      });
      $.find('.navbar-nav li a').each(function () {
        var menuItem = angular.element(this);
        if (menuItem.attr('href').indexOf(pageUrl) !== -1) {
          return menuItem.click();
        }
      })
    }
  }

  /** @ngInject */
  function controller ($log, $translate, $state, AVALIABLE_LANGUAGES, LANGUAGES_TRANSLATION_KEYS) {
    $log.info('NavBarController initialized on date: %s', new Date().toISOString());
    var vm = this;
    vm.avaliableLanguages = AVALIABLE_LANGUAGES;
    vm.mapLanguageTranslationByKey = LANGUAGES_TRANSLATION_KEYS;
    vm.switchLanguage = switchLanguage;

    function switchLanguage (language) {
      $translate.use(language);
      return $state.reload();
    }
  }

})();
