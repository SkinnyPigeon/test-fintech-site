var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var ResultsView = require( './ResultsView.js' );

var SearchView = function( companies ) {
  this.companies = companies;
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
    var elementGetter = new ElementGetter();
    var name = elementGetter.getElementValue( 'name' );
    var city = elementGetter.getElementValue( 'city' );
    var tech = elementGetter.getElementValue( 'tech' );
    console.log( name)
  },

  generalSearch: function() {
    console.log( 'General')
  },

}

module.exports = SearchView;