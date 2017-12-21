var ElementMaker = require( './ElementMaker.js' );
var ElementGetter = require( './ElementGetter.js' );

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
    
    var name = elementGetter.getElement( 'name' );
    var phone = elementGetter.getElement( 'phone' );
    var email = elementGetter.getElement( 'email' );
    var addressLine1 = elementGetter.getElement( 'addressLine1' );
    var addressLine2 = elementGetter.getElement( 'addressLine2' );
    var addressCity = elementGetter.getElement( 'addressCity' );
    var addressRegion = elementGetter.getElement( 'addressRegion' );
    var addressPostCode = elementGetter.getElement( 'addressPostCode' );
    var lastContact = elementGetter.getElement( 'lastContact' );
    var pastWork = elementGetter.getElement( 'pastWork' );
    var techUsed = elementGetter.getElement( 'techUsed' );
    var typeOfWork = elementGetter.getElement( 'typeOfWork' );
    var preferredWork = elementGetter.getElement( 'preferredWork' );
    var haveWeMet = elementGetter.getElement( 'haveWeMet' );
    var haveWeSpoken = elementGetter.getElement( 'haveWeSpoken' );
    var areTheyInterested = elementGetter.getElement( 'areTheyInterested' );
    var externalReference = elementGetter.getElement( 'externalReference' );

    this.addCompanyToDB( name, phone, email, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference );
  },

  addCompanyToDB: function( name, phone, email, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference ) {

    var request = new XMLHttpRequest();
    request.open( 'POST', this.companyUrl);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
      if( request.status === 201 ) {
        var companys = JSON.parse( request.responseText )
      }
      // this.display();
    }
    var data = {
      company: {
        name: name, 
        phone: phone, 
        email: email, 
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
  }

}

module.exports = NewView;