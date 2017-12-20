var ElementMaker = require( './ElementMaker.js' );
var NewView = require( './NewView.js' );

var MainView = function() {
  this.div = document.getElementById( 'all-space' );
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";
  this.companies = [];

  this.getCompanies();
}

MainView.prototype = {

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

  show: function() {
    console.log( this.companies );

    var addButton = document.createElement( 'button' );
    addButton.innerText = "Add new...";
    addButton.onclick = function() {
      this.changeView();
    }.bind( this );

    this.div.appendChild( addButton );

  },

  changeView: function() {
    console.log( "Click" );
    var newView = new NewView();
  }
}

module.exports = MainView;