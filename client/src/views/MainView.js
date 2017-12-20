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

    var addButton = new ElementMaker( 'all-space', 'img', 'addButton', '../css/images/add.png' );

  },

  changeView: function() {

  }
}

module.exports = MainView;