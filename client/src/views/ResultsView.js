var ElementGetter = require( '../models/ElementGetter.js' );
var ElementMaker = require( '../models/ElementMaker.js' );
var Clear = require( '../models/Clear.js' );

var DetailView = require( './DetailView.js' );

var ResultsView = function( companies ) {
  this.companies = companies;
  this.show();
}

ResultsView.prototype = {

  show: function() {
    this.clear();
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
    var clear = new Clear( 'all-space' );
    clear.wipe();
    clear.hide();
  },

  showDetails: function( id ) {
    for( var i = 0; i < this.companies.length; i++ ) {
      if( this.companies[i].id === parseInt( id )) {
        var detailView = new DetailView( this.companies[i] );
      }
    }
  }
}

module.exports = ResultsView;