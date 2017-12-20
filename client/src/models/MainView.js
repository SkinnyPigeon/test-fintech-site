var ElementMaker = require( './ElementMaker.js' );

var MainView = function() {
  this.companies = [];

  this.getCompanies();
  this.show();
}

MainView.prototype = {

  getCompanies: function() {
    
  },

  show: function() {
    console.log( "Hello" );
  }
}

module.exports = MainView;