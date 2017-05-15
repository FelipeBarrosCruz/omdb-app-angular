(function construct() {
  'use strict';

  angular.module('OMDBApp')
    .service('FavoriteService', FavoriteService)



  /** @ngInject */
  function FavoriteService ($log, ngDexie, _) {
    $log.info('FavoriteService initialized on date: %s', new Date().toISOString());
    var DB_TABLE_NAME = 'favorites';

    function validateAndFilter (result) {
      var data = _.pick(result, ['imdbID', 'Title', 'Poster', 'Year', 'imdbRating', 'Genre']);
      data.Genre = data.Genre.split(',')
      return data;
    }

    function create (result, done) {
      var dataToSave = validateAndFilter(result);
      return ngDexie.add(DB_TABLE_NAME, dataToSave)
        .then(function() {
          $log.info('Save favorite in IndexDB with success', dataToSave);
          return done(null, dataToSave);
        }).catch(function (err) {
          $log.error('Error when save favorite in IndexDB', err);
          return done(err, null);
        })
    }

    function remove (result, done) {
      return ngDexie.remove(DB_TABLE_NAME, result.imdbID)
        .then(function () {
          $log.info('imdbID [%s] removed with success', result.imdbID);
          return done(null, result);
        }).catch(function (err) {
          if (err) $log.error('imdbID [%s] error when remove', result.imdbID, err);
          return done(err || new Error('Register cannot be removed'), null);
        });
    }

    function select (done) {
      return ngDexie.list(DB_TABLE_NAME)
        .then(function (result) {
          $log.info('Result list of favorites: ', result)
          return done(null, result);
        }).catch(function (err) {
          $log.error('Error when return list of favorites: ', err);
          return done(err || new Error('Cannot get the list of favorites'), null)
        })
    }

    function getByIndex (index, value) {
      return ngDexie.getByIndex(DB_TABLE_NAME, index, value);
    }

    function getByImdbId (imdbID, done) {
      return getByIndex('imdbID', imdbID)
        .then(function (response) {
          $log.info('Successfully to get by imdbID', response);
          return done(null, response);
        }).catch(function (err) {
          if (err) $log.error('Error when get by imdbID', err);
          return done(err || new Error('Register doest exist'), null);
        })
    }

    return {
      create: create,
      remove: remove,
      select: select,
      getByImdbId: getByImdbId
    }
  }

})();
