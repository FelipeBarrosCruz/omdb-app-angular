(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .constant('DEFAULT_LANGUAGE', navigator.language || 'en-US')
})();
