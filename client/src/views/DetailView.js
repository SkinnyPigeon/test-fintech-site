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
    console.log( this.company );
    var name = new ElementMaker( 'edit-space', 'input', 'name', this.company.name, false, true );
    // var phone = new ElementMaker( 'new-space', 'input', 'phone', this.company.phone, 'edit' );
    // var email = new ElementMaker( 'new-space', 'input', 'email', this.company.email, 'edit' );
    // var contact = new ElementMaker( 'new-space', 'input', 'contact', this.company.contact, 'edit' );

    // var addressLine1 = new ElementMaker( 'new-space', 'input', 'addressLine1', this.company.address_line_1, 'edit' );
    // var addressLine2 = new ElementMaker( 'new-space', 'input', 'addressLine2', this.company.address_line_2, 'edit' );
    // var addressCity = new ElementMaker( 'new-space', 'input', 'addressCity', this.company.address_city, 'edit' );
    // var addressRegion = new ElementMaker( 'new-space', 'input', 'addressRegion', this.company.address_region, 'edit' );
    // var addressPostCode = new ElementMaker( 'new-space', 'input', 'addressPostCode', this.company.address_postcode, 'edit' );

    // var lastContact = new ElementMaker( 'new-space', 'input', 'lastContact', this.company.last_contact, 'edit' );
    // lastContact.type = 'date';
    // var pastWork = new ElementMaker( 'new-space', 'input', 'pastWork', this.company.past_work, 'edit' );
    // var techUsed = new ElementMaker( 'new-space', 'input', 'techUsed', this.company.tech_used, 'edit' );
    // var typeOfWork = new ElementMaker( 'new-space', 'input', 'typeOfWork', this.company.type_of_work, 'edit' );
    // var preferredWork = new ElementMaker( 'new-space', 'input', 'preferredWork', 'Preferred Work...' );

    // var haveWeMet = new ElementMaker( 'new-space', 'input', 'haveWeMet', 'Have we met?', 'checkbox' );
    // var haveWeSpoken = new ElementMaker( 'new-space', 'input', 'haveWeSpoken', 'Have we spoken?', 'checkbox' );
    // var areTheyInterested = new ElementMaker( 'new-space', 'input', 'areTheyInterested', 'Are they interested?', 'checkbox' );
    // var externalReference = new ElementMaker( 'new-space', 'input', 'externalReference', 'External References?', 'checkbox' );
  }
}

module.exports = DetailView;
