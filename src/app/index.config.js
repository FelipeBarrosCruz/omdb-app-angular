(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .config(Configuration)

  /** @ngInject */
  function Configuration ($translateProvider) {

    var langMap = {
      'en_*': 'en',
      'en-*': 'en',
      'pt_*': 'pt',
      'pt-*': 'pt',
      'es_*': 'es',
      'es-*': 'es'
    };

    $translateProvider
      .useLocalStorage()
      .useSanitizeValueStrategy('escape')
      .registerAvailableLanguageKeys(['en', 'pt', 'es'], langMap)
      .preferredLanguage(DEFAULT_LANGUAGE)
      .determinePreferredLanguage()
      .fallbackLanguage(DEFAULT_LANGUAGE);
  }
})();

