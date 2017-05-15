(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .constant('DEFAULT_LANGUAGE', navigator.language || 'en-US')
    .constant('FALLBACK_POSTER_IMG', 'assets/images/default_poster.jpg')
    .constant('AVALIABLE_LANGUAGES', [
      'en',
      'pt'
    ])
    .constant('LANGUAGES_TRANSLATION_KEYS', {
      'en': 'NAVBAR_LANGUAGE_EN',
      'pt': 'NAVBAR_LANGUAGE_PT'
    })
})();
