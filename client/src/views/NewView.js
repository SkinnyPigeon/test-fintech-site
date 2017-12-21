var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var NewView = function() {
  this.div = document.getElementById( 'new-space' );
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";

  this.show();
}

NewView.prototype = {
  show: function() {
    this.clear();

    var basicMaker = new ElementMaker();
    basicMaker.make( 'new-space', 'input', 'name', 'Name...' );
    basicMaker.make( 'new-space', 'input', 'phone', 'Phone...' );
    basicMaker.make( 'new-space', 'input', 'email', 'Email...' );
    basicMaker.make( 'new-space', 'input', 'contact', 'Point Of Contact...' );


    var addressMaker = new ElementMaker();
    addressMaker.make( 'new-space', 'input', 'addressLine1', 'Address Line 1...' );
    addressMaker.make( 'new-space', 'input', 'addressLine2', 'Address Line 2...' );
    addressMaker.make( 'new-space', 'input', 'addressCity', 'City...' );
    addressMaker.make( 'new-space', 'input', 'addressRegion', 'Region...' );
    addressMaker.make( 'new-space', 'input', 'addressPostCode', 'Post Code...' );

    var detailMaker = new ElementMaker();
    detailMaker.make( 'new-space', 'input', 'lastContact', 'Last Contact...', 'date' );
    detailMaker.make( 'new-space', 'input', 'pastWork', 'Previous Work...' );
    detailMaker.make( 'new-space', 'input', 'techUsed', 'Tech Used...' );
    detailMaker.make( 'new-space', 'input', 'typeOfWork', 'Type of work undertaken...' );
    detailMaker.make( 'new-space', 'input', 'preferredWork', 'Preferred Work...' );

    var checklistMaker = new ElementMaker();
    checklistMaker.make( 'new-space', 'input', 'haveWeMet', 'Have we met?', 'checkbox' );
    checklistMaker.make( 'new-space', 'input', 'haveWeSpoken', 'Have we spoken?', 'checkbox' );
    checklistMaker.make( 'new-space', 'input', 'areTheyInterested', 'Are they interested?', 'checkbox' );
    checklistMaker.make( 'new-space', 'input', 'externalReference', 'External References?', 'checkbox' );

    var submit = document.createElement( 'button' );
    submit.innerText = "Submit";
    submit.onclick = function() {
      this.gatherInfo();
    }.bind( this );
    this.div.appendChild( submit );
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

  gatherInfo: function() {
    var elementGetter = new ElementGetter();

    var name = elementGetter.getElementValue( 'name' );
    var phone = elementGetter.getElementValue( 'phone' );
    var email = elementGetter.getElementValue( 'email' );
    var contact = elementGetter.getElementValue( 'contact' );

    var addressLine1 = elementGetter.getElementValue( 'addressLine1' );
    var addressLine2 = elementGetter.getElementValue( 'addressLine2' );
    var addressCity = elementGetter.getElementValue( 'addressCity' );
    var addressRegion = elementGetter.getElementValue( 'addressRegion' );
    var addressPostCode = elementGetter.getElementValue( 'addressPostCode' );

    var lastContact = elementGetter.getElementValue( 'lastContact' );
    var pastWork = elementGetter.getElementValue( 'pastWork' );
    var techUsed = elementGetter.getElementValue( 'techUsed' );
    var typeOfWork = elementGetter.getElementValue( 'typeOfWork' );
    var preferredWork = elementGetter.getElementValue( 'preferredWork' );

    var haveWeMet = elementGetter.getElementValue( 'haveWeMet' );
    var haveWeSpoken = elementGetter.getElementValue( 'haveWeSpoken' );
    var areTheyInterested = elementGetter.getElementValue( 'areTheyInterested' );
    var externalReference = elementGetter.getElementValue( 'externalReference' );

    this.addCompanyToDB( name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference );
  },

  addCompanyToDB: function( name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference ) {

    var request = new XMLHttpRequest();
    request.open( 'POST', this.companyUrl);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
      if( request.status === 201 ) {
        var companys = JSON.parse( request.responseText )
      }
      this.resetForm();
    }
    var data = {
      company: {
        name: name, 
        phone: phone, 
        email: email, 
        contact: contact,
        address_line_1: addressLine1, 
        address_line_2: addressLine2, 
        address_city: addressCity, 
        address_region: addressRegion, 
        address_postcode: addressPostCode, 
        last_contact: lastContact, 
        past_work: pastWork, 
        tech_used: techUsed, 
        type_of_work: typeOfWork, 
        preferred_work: preferredWork, 
        have_we_met: haveWeMet, 
        have_we_spoken: haveWeSpoken, 
        are_they_interested: areTheyInterested, 
        external_reference: externalReference 
      }
    }
    request.send( JSON.stringify( data ));
  },

  resetForm: function() {
    var elementGetter = new ElementGetter();

    elementGetter.resetElement( 'name' );
    elementGetter.resetElement( 'phone' );
    elementGetter.resetElement( 'email' );
    elementGetter.resetElement( 'contact' );

    elementGetter.resetElement( 'addressLine1' );
    elementGetter.resetElement( 'addressLine2' );
    elementGetter.resetElement( 'addressCity' );
    elementGetter.resetElement( 'addressRegion' );
    elementGetter.resetElement( 'addressPostCode' );

    elementGetter.resetElement( 'lastContact' );
    elementGetter.resetElement( 'pastWork' );
    elementGetter.resetElement( 'techUsed' );
    elementGetter.resetElement( 'typeOfWork' );
    elementGetter.resetElement( 'preferredWork' );

    elementGetter.resetElement( 'haveWeMet' );
    elementGetter.resetElement( 'haveWeSpoken' );
    elementGetter.resetElement( 'areTheyInterested' );
    elementGetter.resetElement( 'externalReference' );
  }

}

module.exports = NewView;