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
    targetButton.onclick = function() {
      this.targetSearch();
    }

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
  }

}

module.exports = SearchView;