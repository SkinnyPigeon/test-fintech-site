var ElementMaker = require( './ElementMaker.js' );
var ElementGetter = require( './ElementGetter.js' );

var NewView = function() {
  this.div = document.getElementById( 'new-space' );

  this.show();
}

NewView.prototype = {
  show: function() {
    console.log( "hello" );
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
      console.log( "hello" );
      this.gatherInfo();
    }.bind( this );
    this.div.appendChild( submit );
  },

  gatherInfo: function() {
    var name = new ElementGetter( 'name' );
    var phone = new ElementGetter( 'phone' );
    var email = new ElementGetter( 'email' );
    var addressLine1 = new ElementGetter( 'addressLine1' );
    var addressLine2 = new ElementGetter( 'addressLine2' );
    var addressCity = new ElementGetter( 'addressCity' );
    var addressRegion = new ElementGetter( 'addressRegion' );
    var addressPostCode = new ElementGetter( 'addressPostCode' );
    var lastContact = new ElementGetter( 'lastContact' );
    var pastWork = new ElementGetter( 'pastWork' );
    var techUsed = new ElementGetter( 'techUsed' );
    var typeOfWork = new ElementGetter( 'typeOfWork' );
    var preferredWork = new ElementGetter( 'preferredWork' );
    var haveWeMet = new ElementGetter( 'haveWeMet' );
    var haveWeSpoken = new ElementGetter( 'haveWeSpoken' );
    var areTheyInterested = new ElementGetter( 'areTheyInterested' );
    var externalReference = new ElementGetter( 'externalReference' );

    this.addCompanyToDB( name, phone, email, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference );
  },

  addCompanyToDB: function( name, phone, email, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference ) {

    var request = new XMLHttpRequest();
    request.open( 'POST', this.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if( request.status === 201 ) {
        var trans = JSON.parse( request.responseText )
      }
      this.display();
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
        address_post_code: addressPostCode, 
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