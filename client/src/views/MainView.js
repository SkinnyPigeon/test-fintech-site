var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var NavView = require( './NavView.js' );
var DetailView = require( './DetailView.js' );
var NewView = require( './NewView.js' );
var SearchView = require( './SearchView.js' );

var MainView = function( companies ) {
  this.companies = companies;
  this.show();
}

MainView.prototype = {

  show: function() {
    this.clear();
    console.log( this.companies );
    var elementGetter = new ElementGetter();

    for( var i = 0; i < this.companies.length; i++ ) {
      var elementMaker = new ElementMaker( );
      elementMaker.make( 'all-space', 'ul', this.companies[i].id );
      var company = elementGetter.getElement( this.companies[i].id );
      company.onclick = function( e ) {
        this.showDetails( e.target.parentNode.id );
      }.bind( this );
      var companyName = elementMaker.makeList( this.companies[i].name, this.companies[i].id );
      var companyPhone = elementMaker.makeList( this.companies[i].phone, this.companies[i].id );
      var companyEmail = elementMaker.makeList( this.companies[i].email, this.companies[i].id );
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

    var editSpace = document.getElementById( "edit-space" );
    while( editSpace.hasChildNodes() ) {
      editSpace.removeChild( editSpace.lastChild );
    }

    var commentSpace = document.getElementById( "comment-space" );
    while( commentSpace.hasChildNodes() ) {
      commentSpace.removeChild( commentSpace.lastChild );
    }

    var homeSpace = document.getElementById( 'home-space' );
    while( homeSpace.hasChildNodes() ) {
      homeSpace.removeChild( homeSpace.lastChild );
    }
  },

  showDetails: function( id ) {
    for( var i = 0; i < this.companies.length; i++ ) {
      if( this.companies[i].id === parseInt( id )) {
        var detailView = new DetailView( this.companies[i] );
      }
    }
  },

  newView: function() {
    var newView = new NewView();
  },

  searchView: function() {
    var searchView = new SearchView( this.companies );
  }
}

module.exports = MainView;