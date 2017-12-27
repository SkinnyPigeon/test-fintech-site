var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );
var Clear = require( '../models/Clear.js' );

var NavView = require( './NavView.js' );
var DetailView = require( './DetailView.js' );
var NewView = require( './NewView.js' );
var SearchView = require( './SearchView.js' );

var MainView = function( companies ) {
  this.companies = companies;
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";

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
    var clear = new Clear('all-space');
    clear.hide();
    clear.wipe();
  },

  showDetails: function( id ) {
    for( var i = 0; i < this.companies.length; i++ ) {
      if( this.companies[i].id === parseInt( id )) {
        var detailView = new DetailView( this.companies[i] );
      }
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
  }
}

module.exports = MainView;