var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );
var Clear = require( '../models/Clear.js' );

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
  this.show();
  this.getCompanies();
}

HomeView.prototype = {

  displayNav: function() {
    var nav = new NavView();
    var elementGetter = new ElementGetter();

    var homeButton = elementGetter.getElement( 'home' );
    homeButton.onclick = function() {
      this.clear();
      this.show();
    }.bind( this );

    var plusButton = elementGetter.getElement( 'add' );
    plusButton.onclick = function() {
      this.clear();
      this.newView();
    }.bind( this );

    var listButton = elementGetter.getElement( 'list' );
    listButton.onclick = function() {
      this.clear();
      this.getCompanies();
      this.companyView();
    }.bind( this );

    var searchButton = elementGetter.getElement( 'search' );
    searchButton.onclick = function() {
      this.clear();
      this.searchView();
    }.bind( this );
  },

  show: function() {
    this.clear();
    var homeSpace = document.getElementById( 'home-space' );
    var homeHeader = document.createElement( 'h3' );
    homeHeader.innerText = "Welcome to the Sopra Steria test FinTech DB"
    var homeText = document.createElement( 'p' );
    homeText.innerText = "Please feel free to test out the different features and please report any bugs or issues to me"

    var thanks = document.createElement( 'p' );
    thanks.innerText = "Thanks";

    homeSpace.appendChild( homeHeader );
    homeSpace.appendChild( homeText );
    homeSpace.appendChild( thanks );
  },

  clear: function() {
    var clearHome = new Clear();
    clearHome.wipe();
    var clear = new Clear('home-space');
    clear.wipe();
    clear.hide();
  },

  getCompanies: function() {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.companyUrl );
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      if( request.status === 200 ) {
        var companies = JSON.parse( request.responseText );
        this.companies = companies;
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