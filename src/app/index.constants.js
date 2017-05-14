(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .constant('DEFAULT_LANGUAGE', navigator.language || 'en-US')
    .constant('FALLBACK_POSTER_IMG', 'assets/images/default_poster.jpg')
})();
