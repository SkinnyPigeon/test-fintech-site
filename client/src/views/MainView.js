var ElementMaker = require( './ElementMaker.js' );

var MainView = function() {
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";
  this.companies = [];

  this.getCompanies();
}

MainView.prototype = {

  getCompanies: function() {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.companyUrl );
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true;
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
  }
}

module.exports = MainView;