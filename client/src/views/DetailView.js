var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var DetailView = function( company ) {
  this.company = company;

  this.show();
}

DetailView.prototype = {
  show: function() {
    this.clear();

    var basicMaker = new ElementMaker( 'detail-space', 'ul', 'companyBasicDetails' );
    basicMaker.makeList( this.company.name, 'companyBasicDetails', 'Name' );
    basicMaker.makeList( this.company.phone, 'companyBasicDetails', 'Phone');
    basicMaker.makeList( this.company.email, 'companyBasicDetails', 'Email' );
    basicMaker.makeList( this.company.contact, 'companyBasicDetails', 'Point of Contact' );

    var addressMaker = new ElementMaker( 'detail-space', 'ul', 'companyAddress' );
    addressMaker.makeList( this.company.address_line_1, 'companyAddress', 'Address Line 1' );
    addressMaker.makeList( this.company.address_line_2, 'companyAddress', 'Address Line 2' );
    addressMaker.makeList( this.company.address_city, 'companyAddress', 'City' );
    addressMaker.makeList( this.company.address_region, 'companyAddress', 'Region' );
    addressMaker.makeList( this.company.address_postcode, 'companyAddress', 'Post Code' );

    var detailMaker = new ElementMaker( 'detail-space', 'ul', 'companyDetails' );
    detailMaker.makeList( this.company.type_of_work, 'companyDetails', 'Type Of Work' );
    detailMaker.makeList( this.company.tech_used, 'companyDetails', 'Technology Used' );
    detailMaker.makeList( this.company.past_work, 'companyDetails', 'Past Work' );
    detailMaker.makeList( this.company.preferred_work, 'companyDetails', 'Preferred Work' );

    var detailSpace = document.getElementById( 'detail-space' );

    var editButton = document.createElement( 'button' );
    editButton.innerText = "Edit...";
    editButton.onclick = function() {
      this.edit();
    }.bind( this );

    var deleteButton = document.createElement( 'button' );
    deleteButton.innerText = "Delete...";
    deleteButton.onclick = function() {
      this.edit();
    }.bind( this );

    detailSpace.appendChild( editButton );
    detailSpace.appendChild( deleteButton );

  },

  clear: function() {
    var detailSpace = document.getElementById( "detail-space" );
    while( detailSpace.hasChildNodes() ) {
      detailSpace.removeChild( detailSpace.lastChild );
    }
  },

  edit: function() {
    console.log( 'click' );
  }
}

module.exports = DetailView;
