var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var NavView = require( './NavView.js' );
var MainView = require( './MainView.js' );
var DetailView = require( './DetailView.js' );
var NewView = require( './NewView.js' );
var SearchView = require( './SearchView.js' );

var HomeView = function() {
  this.div = document.getElementById( 'all-space' );
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";
  this.companies = [];

  this.displayNav();
  this.getCompanies();
}

HomeView.prototype = {

  displayNav: function() {
    var nav = new NavView();
    var elementGetter = new ElementGetter();

    var homeButton = elementGetter.getElement( 'home' );
    homeButton.onclick = function() {
      this.getCompanies();
    }.bind( this );

    var plusButton = elementGetter.getElement( 'add' );
    plusButton.onclick = function() {
      this.newView();
    }.bind( this );

    var listButton = elementGetter.getElement( 'list' );
    listButton.onclick = function() {
      this.companyView();
    }.bind( this );

    var searchButton = elementGetter.getElement( 'search' );
    searchButton.onclick = function() {
      this.searchView();
    }.bind( this );
  },

  show: function() {
    this.clear();
    var homeSpace = document.getElementById( 'home-space' );
    var homeHeader = document.createElement( 'h3' );
    homeHeader.innerText = "Welcome to the Sopra Steria test FinTech DB"
    var homeText = document.createElement( 'h4' );
    homeText.innerText = "Please feel free to test out the different features and please report any bugs or issues to me"

    var thanks = document.createElement( 'h4' );
    thanks.innerText = "Thanks";

    homeSpace.appendChild( homeHeader );
    homeSpace.appendChild( homeText );
    homeSpace.appendChild( thanks );
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

    var homeSpace = document.getElementById( "home-space" );
    while( homeSpace.hasChildNodes() ) {
      homeSpace.removeChild( homeSpace.lastChild );
    }
  },

  getCompanies: function() {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.companyUrl );
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      if( request.status === 200 ) {
        var companies = JSON.parse( request.responseText );
        this.companies = companies;
        this.show();
      }
    }
    request.send( null );
  },

  newView: function() {
    var newView = new NewView();
  },

  searchView: function() {
    var searchView = new SearchView( this.companies );
  },

  companyView: function() {
    var companyView = new MainView( this.companies );
  }
}

module.exports = HomeView;