(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .constant('DEFAULT_LANGUAGE', navigator.language || 'en-US')
    .constant('DATABASE_OPTIONS', {
      name: 'omdb_database',
      debug: false,
      version: 1,
      stores: {
        'movies': '++id',
        'favorites': '++id'
      }
    })
})();
