var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

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

    elementMaker.makeListItem(  'generalSearch', 'name', 'What to search...'  );

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
    var newSpace = document.getElementById( "new-space" );
    while( newSpace.hasChildNodes() ) {
      newSpace.removeChild( newSpace.lastChild );
    }
    var allSpace = document.getElementById( "all-space" );
    while( allSpace.hasChildNodes() ) {
      allSpace.removeChild( allSpace.lastChild );
    }

    var detailSpace = document.getElementById( "detail-space" );
    while( detailSpace.hasChildNodes() ) {
      detailSpace.removeChild( detailSpace.lastChild );
    }

    var searchSpace = document.getElementById( "search-space" );
    while( searchSpace.hasChildNodes() ) {
      searchSpace.removeChild( searchSpace.lastChild );
    }
  },

  targetSearch: function() {
    this.resultCompanies = [];

    var elementGetter = new ElementGetter();
    var name = elementGetter.getElementValue( 'name' );
    var city = elementGetter.getElementValue( 'city' );
    var tech = elementGetter.getElementValue( 'tech' );

    var nameArray = name.toUpperCase().split(/[' ,]+/);
    for( var i = 0; i < this.companies.length; i++ ) {
      var nameToCheck = this.companies[i].name.toUpperCase().split(/[' ,]+/);
      var results = _.intersection( nameArray, nameToCheck );
      if( results.length > 0 ) {
        this.resultIndexes.push( i );
      }
    }

    var cityArray = city.toUpperCase().split(/[' ,]+/);
    for( var i = 0; i < this.companies.length; i++ ) {
      var cityToCheck = this.companies[i].address_city.toUpperCase().split(/[' ,]+/);
      var results = _.intersection( cityArray, cityToCheck );
      if( results.length > 0 ) {
        this.resultIndexes.push( i );
      }
    }

    var techArray = tech.toUpperCase().split(/[' ,]+/);
    for( var i = 0; i < this.companies.length; i++ ) {
      var techToCheck = this.companies[i].tech_used.toUpperCase().split(/[' ,]+/);
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
    console.log( 'General')
  },

  showResults: function() {
    var results = new ResultsView( this.resultCompanies );
  }

}

module.exports = SearchView;