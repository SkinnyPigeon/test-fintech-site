var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var DetailView = function( company ) {
  this.company = company;
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";

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
      this.edit( this.company.id );
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

  edit: function( id ) {
    console.log( this.company );
    var name = new ElementMaker( 'edit-space', 'input', 'name', this.company.name, false, true );
    
    var editSpace = document.getElementById( 'edit-space' );
    var submitButton = document.createElement( 'button' );
    submitButton.innerText = 'submit';
    submitButton.onclick = function() {
      this.gatherInfo( id );
    }.bind( this )
    editSpace.appendChild( submitButton );
  },

  gatherInfo: function( id ) {
    var elementGetter = new ElementGetter();

    // var name = elementGetter.getElementValue( 'name' );
    // var phone = elementGetter.getElementValue( 'phone' );
    // var email = elementGetter.getElementValue( 'email' );
    // var contact = elementGetter.getElementValue( 'contact' );

    // var addressLine1 = elementGetter.getElementValue( 'addressLine1' );
    // var addressLine2 = elementGetter.getElementValue( 'addressLine2' );
    // var addressCity = elementGetter.getElementValue( 'addressCity' );
    // var addressRegion = elementGetter.getElementValue( 'addressRegion' );
    // var addressPostCode = elementGetter.getElementValue( 'addressPostCode' );

    // var lastContact = elementGetter.getElementValue( 'lastContact' );
    // var pastWork = elementGetter.getElementValue( 'pastWork' );
    // var techUsed = elementGetter.getElementValue( 'techUsed' );
    // var typeOfWork = elementGetter.getElementValue( 'typeOfWork' );
    // var preferredWork = elementGetter.getElementValue( 'preferredWork' );

    // var haveWeMet = elementGetter.getElementValue( 'haveWeMet' );
    // var haveWeSpoken = elementGetter.getElementValue( 'haveWeSpoken' );
    // var areTheyInterested = elementGetter.getElementValue( 'areTheyInterested' );
    // var externalReference = elementGetter.getElementValue( 'externalReference' );

    // this.updateDB( id, name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference );
  },

  updateDB: function( id, name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference ) {
  //   var request = new XMLHttpRequest();
  //   request.open( 'PUT', this.url + id );
  //   request.setRequestHeader( "Content-type", "application/json" );
  //   request.onload = () => {
  //     if( request.status === 200 ) {
  //       var companys = JSON.parse( request.responseText )
  //     }
  //     // this.resetForm();
  //     console.log( 'hello asjkdahsdl')
  //   }
  //   var data = {
  //     company: {
  //       name: name, 
  //       phone: phone, 
  //       email: email, 
  //       contact: contact,
  //       address_line_1: addressLine1, 
  //       address_line_2: addressLine2, 
  //       address_city: addressCity, 
  //       address_region: addressRegion, 
  //       address_postcode: addressPostCode, 
  //       last_contact: lastContact, 
  //       past_work: pastWork, 
  //       tech_used: techUsed, 
  //       type_of_work: typeOfWork, 
  //       preferred_work: preferredWork, 
  //       have_we_met: haveWeMet, 
  //       have_we_spoken: haveWeSpoken, 
  //       are_they_interested: areTheyInterested, 
  //       external_reference: externalReference 
  //     }
  //   }
  //   request.send( JSON.stringify( data ));
  }

}

module.exports = DetailView;
