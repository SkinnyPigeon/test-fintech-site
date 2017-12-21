var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );
var MainView = require( './MainView.js' );

var DetailView = function( company ) {
  this.company = company;
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";

  this.show();
}

DetailView.prototype = {
  show: function() {
    this.clear();

    var basicMaker = new ElementMaker();
    basicMaker.make( 'detail-space', 'ul', 'companyBasicDetails' );

    basicMaker.makeList( this.company.name, 'companyBasicDetails', 'Name' );
    basicMaker.makeList( this.company.phone, 'companyBasicDetails', 'Phone');
    basicMaker.makeList( this.company.email, 'companyBasicDetails', 'Email' );
    basicMaker.makeList( this.company.contact, 'companyBasicDetails', 'Point of Contact' );

    var addressMaker = new ElementMaker();
    addressMaker.make( 'detail-space', 'ul', 'companyAddress' );

    addressMaker.makeList( this.company.address_line_1, 'companyAddress', 'Address Line 1' );
    addressMaker.makeList( this.company.address_line_2, 'companyAddress', 'Address Line 2' );
    addressMaker.makeList( this.company.address_city, 'companyAddress', 'City' );
    addressMaker.makeList( this.company.address_region, 'companyAddress', 'Region' );
    addressMaker.makeList( this.company.address_postcode, 'companyAddress', 'Post Code' );

    var detailMaker = new ElementMaker();
    detailMaker.make( 'detail-space', 'ul', 'companyDetails' );

    detailMaker.makeList( this.company.last_contact, 'companyDetails', 'Last Contact' );
    detailMaker.makeList( this.company.type_of_work, 'companyDetails', 'Type Of Work' );
    detailMaker.makeList( this.company.tech_used, 'companyDetails', 'Technology Used' );
    detailMaker.makeList( this.company.past_work, 'companyDetails', 'Past Work' );
    detailMaker.makeList( this.company.preferred_work, 'companyDetails', 'Preferred Work' );

    var checklistMaker = new ElementMaker();
    checklistMaker.make( 'detail-space', 'ul', 'companyChecklist' );

    checklistMaker.makeList( this.company.have_we_spoken, 'companyChecklist', 'Have we spoken?' );
    checklistMaker.makeList( this.company.have_we_met, 'companyChecklist', 'Have we met?' );
    checklistMaker.makeList( this.company.are_they_interested, 'companyChecklist', 'Are they interested?' );
    checklistMaker.makeList( this.company.external_reference, 'companyChecklist', 'External Reference?' );

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

    var backButton = document.createElement( 'button' );
    backButton.innerText = "Back...";
    backButton.onclick = function() {
      this.clear();
      var mainView = new MainView();
    }.bind( this );

    detailSpace.appendChild( editButton );
    detailSpace.appendChild( deleteButton );
    detailSpace.appendChild( backButton );
  },

  clear: function() {
    var allSpace = document.getElementById( "all-space" );
    while( allSpace.hasChildNodes() ) {
      allSpace.removeChild( allSpace.lastChild );
    }

    var detailSpace = document.getElementById( "detail-space" );
    while( detailSpace.hasChildNodes() ) {
      detailSpace.removeChild( detailSpace.lastChild );
    }
  },

  edit: function( id ) {
    console.log( this.company );
    var elementMaker = new ElementMaker();

    elementMaker.edit( 'edit-space', 'name', this.company.name );
    elementMaker.edit( 'edit-space', 'phone', this.company.phone );
    elementMaker.edit( 'edit-space', 'email', this.company.email );
    elementMaker.edit( 'edit-space', 'contact', this.company.contact );

    elementMaker.edit( 'edit-space', 'addressLine1', this.company.address_line_1 );
    elementMaker.edit( 'edit-space', 'addressLine2', this.company.address_line_2 );
    elementMaker.edit( 'edit-space', 'addressCity', this.company.address_city  );
    elementMaker.edit( 'edit-space', 'addressRegion', this.company.address_region );
    elementMaker.edit( 'edit-space', 'addressPostCode', this.company.address_postcode );

    elementMaker.edit( 'edit-space', 'lastContact', this.company.last_contact, 'date', 'Last Contact: ' );
    elementMaker.edit( 'edit-space', 'pastWork', this.company.past_work );
    elementMaker.edit( 'edit-space', 'techUsed', this.company.tech_used );
    elementMaker.edit( 'edit-space', 'typeOfWork', this.company.type_of_work );
    elementMaker.edit( 'edit-space', 'preferredWork', this.company.preferred_work );

    elementMaker.edit( 'edit-space', 'haveWeSpoken', this.company.have_we_spoken, 'checkbox', 'Have we spoken?' );
    elementMaker.edit( 'edit-space', 'haveWeMet', this.company.have_we_met, 'checkbox', 'Have we met?' );
    elementMaker.edit( 'edit-space', 'areTheyInterested', this.company.are_they_interested, 'checkbox', 'Are they interested?' );
    elementMaker.edit( 'edit-space', 'externalReference', this.company.external_reference, 'checkbox', 'External Reference?' );

    var editSpace = document.getElementById( 'edit-space' );
    var submitButton = document.createElement( 'button' );
    submitButton.innerText = 'submit';
    submitButton.onclick = function() {
      this.gatherInfo( id );
    }.bind( this )
    editSpace.appendChild( submitButton );
  },

  gatherInfo: function( id ) {
    console.log( id );
    var elementGetter = new ElementGetter();

    var name = elementGetter.getElementValue( 'name' );
    console.log( name )
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
