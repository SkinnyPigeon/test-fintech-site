var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );
var Clear = require( '../models/Clear.js' );

var _ = require( 'lodash' );

var ResultsView = require( './ResultsView.js' );

var SearchView = function( companies ) {
  this.companies = companies;
  this.resultIndexes = [];
  this.resultCompanies = [];
  
  this.show();
}

SearchView.prototype = {

  show: function() {
    this.clear();
    var elementMaker = new ElementMaker();
    elementMaker.make( 'search-space', 'ul', 'directSearch' );
    elementMaker.makeText( 'directSearch', 'directSearch', 'Targetted Search', 'h4' );

    elementMaker.makeListItem(  'directSearch', 'name', 'Name...'  );
    elementMaker.makeListItem( 'directSearch', 'city', 'City...' );
    elementMaker.makeListItem( 'directSearch', 'tech', 'Technology...' );

    var searchSpace = document.getElementById( 'search-space' );
    var targetButton = document.createElement( 'img' );
    targetButton.id = 'targetButton';
    targetButton.src = './css/images/tick.png';
    targetButton.onclick = function() {
      this.targetSearch();
    }.bind( this );

    searchSpace.appendChild( targetButton );

    elementMaker.make( 'search-space', 'ul', 'generalSearch' );
    elementMaker.makeText( 'generalSearch', 'generalSearch', 'General Search', 'h4' );

    elementMaker.makeListItem(  'generalSearch', 'general', 'What to search...'  );

    var searchSpace = document.getElementById( 'search-space' );
    var generalButton = document.createElement( 'img' );
    generalButton.id = 'generalButton';
    generalButton.src = './css/images/tick.png';
    generalButton.onclick = function() {
      this.generalSearch();
    }.bind( this );

    searchSpace.appendChild( generalButton );
  },

  clear: function() {
    var clear = new Clear('search-space');
    clear.wipe();
    clear.hide();
  },

  targetSearch: function() {
    this.resultCompanies = [];

    var elementGetter = new ElementGetter();
    var name = elementGetter.getElementValue( 'name' );
    var city = elementGetter.getElementValue( 'city' );
    var tech = elementGetter.getElementValue( 'tech' );

    var nameArray = name.toUpperCase().split(/[' ,-/]+/);
    for( var i = 0; i < this.companies.length; i++ ) {
      var nameToCheck = this.companies[i].name.toUpperCase().split(/[' ,-/]+/);
      var results = _.intersection( nameArray, nameToCheck );
      if( results.length > 0 ) {
        this.resultIndexes.push( i );
      }
    }

    var cityArray = city.toUpperCase().split(/[' ,-/]+/);
    for( var i = 0; i < this.companies.length; i++ ) {
      var cityToCheck = this.companies[i].address_city.toUpperCase().split(/[' ,-/]+/);
      var results = _.intersection( cityArray, cityToCheck );
      if( results.length > 0 ) {
        this.resultIndexes.push( i );
      }
    }

    var techArray = tech.toUpperCase().split(/[' ,-/]+/);
    for( var i = 0; i < this.companies.length; i++ ) {
      var techToCheck = this.companies[i].tech_used.toUpperCase().split(/[' ,-/]+/);
      var results = _.intersection( techArray, techToCheck );
      if( results.length > 0 ) {
        this.resultIndexes.push( i );
      }
    }

    this.resultIndexes = _.uniq( this.resultIndexes );
    for( var i = 0; i < this.resultIndexes.length; i++ ) {
      this.resultCompanies.push( this.companies[this.resultIndexes[i]] );
    }

    this.showResults();
  },

  generalSearch: function() {
    this.resultCompanies = [];

    var elementGetter = new ElementGetter();
    var general = elementGetter.getElementValue( 'general' );
    var generalArray = general.toUpperCase().split(/[' ,-/]+/);
    for( i = 0; i < this.companies.length; i++ ) {
      for( value in this.companies[i] ) {
        var words = String( this.companies[i][value] );
        var wordsToCheck = words.toUpperCase().split(/[' ,-/]+/);
        var results = _.intersection( generalArray, wordsToCheck );
        if( results.length > 0 ) {
          this.resultIndexes.push( i );
        }
      }
    }
    this.resultIndexes = _.uniq( this.resultIndexes );
    for( var i = 0; i < this.resultIndexes.length; i++ ) {
      this.resultCompanies.push( this.companies[this.resultIndexes[i]] );
    }
    this.showResults();
  },

  showResults: function() {
    var results = new ResultsView( this.resultCompanies );
  },

  checkSearch: function() {
    var elementGetter = new ElementGetter();

    var name = elementGetter.getElementValue( 'name' );
    var city = elementGetter.getElementValue( 'city' );
    var tech = elementGetter.getElementValue( 'tech' );
    var general = elementGetter.getElementValue( 'general' );

    if( name || city || tech ) {
      this.targetSearch();
    }
    if( general ) {
      this.generalSearch();
    }
  }
}

module.exports = SearchView;