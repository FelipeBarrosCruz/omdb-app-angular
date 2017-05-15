(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .directive('navbarTop', function() {
      return {
      templateUrl: 'app/components/navbar-top/navbar-top.html',
      link: link,
      controller: controller,
      controllerAs: 'navbar_top_vm'
    }
  })

  function link ($scope, $element) {
    angular.element($element).find('.navbar-nav li').click(function(){
      angular.element(this).addClass('active');
      angular.element(this).parent().children('li').not(this).removeClass('active');
    });
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
