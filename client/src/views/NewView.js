var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var NewView = function() {
  this.div = document.getElementById( 'new-space' );
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";

  this.show();
}

NewView.prototype = {
  show: function() {
    var name = new ElementMaker( 'new-space', 'input', 'name', 'Name...' );
    var phone = new ElementMaker( 'new-space', 'input', 'phone', 'Phone...' );
    var email = new ElementMaker( 'new-space', 'input', 'email', 'Email...' );
    var email = new ElementMaker( 'new-space', 'input', 'contact', 'Point Of Contact...' );

    var addressLine1 = new ElementMaker( 'new-space', 'input', 'addressLine1', 'Address Line 1...' );
    var addressLine2 = new ElementMaker( 'new-space', 'input', 'addressLine2', 'Address Line 2...' );
    var addressCity = new ElementMaker( 'new-space', 'input', 'addressCity', 'City...' );
    var addressRegion = new ElementMaker( 'new-space', 'input', 'addressRegion', 'Region...' );
    var addressPostCode = new ElementMaker( 'new-space', 'input', 'addressPostCode', 'Post Code...' );

    var lastContact = new ElementMaker( 'new-space', 'input', 'lastContact', 'Last Contact...', 'date' );
    var pastWork = new ElementMaker( 'new-space', 'input', 'pastWork', 'Previous Work...' );
    var techUsed = new ElementMaker( 'new-space', 'input', 'techUsed', 'Tech Used...' );
    var typeOfWork = new ElementMaker( 'new-space', 'input', 'typeOfWork', 'Type of work undertaken...' );
    var preferredWork = new ElementMaker( 'new-space', 'input', 'preferredWork', 'Preferred Work...' );

    var haveWeMet = new ElementMaker( 'new-space', 'input', 'haveWeMet', 'Have we met?', 'checkbox' );
    var haveWeSpoken = new ElementMaker( 'new-space', 'input', 'haveWeSpoken', 'Have we spoken?', 'checkbox' );
    var areTheyInterested = new ElementMaker( 'new-space', 'input', 'areTheyInterested', 'Are they interested?', 'checkbox' );
    var externalReference = new ElementMaker( 'new-space', 'input', 'externalReference', 'External References?', 'checkbox' );

    var submit = document.createElement( 'button' );
    submit.innerText = "Submit";
    submit.onclick = function() {
      this.gatherInfo();
    }.bind( this );
    this.div.appendChild( submit );
  },

  gatherInfo: function() {
    var elementGetter = new ElementGetter();

    var name = elementGetter.getElementValue( 'name' );
    var phone = elementGetter.getElementValue( 'phone' );
    var email = elementGetter.getElementValue( 'email' );
    var email = elementGetter.getElementValue( 'contact' );

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