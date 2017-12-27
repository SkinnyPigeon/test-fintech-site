var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );
var Clear = require( '../models/Clear.js' );

var CommentView = require( './CommentView.js' );

var DetailView = function( company ) {
  this.company = company;
  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";

  this.show();
}

DetailView.prototype = {
  show: function() {
    this.clear();
    console.log( this.company );
    var detailSpace = document.getElementById( 'detail-space' );

    var basicMaker = new ElementMaker();
    basicMaker.make( 'detail-space', 'ul', 'companyBasicDetails' );
    basicMaker.makeText( 'companyBasicDetails', 'companyBasicDetails', 'Basic Details', 'h4' );

    basicMaker.makeList( this.company.name, 'companyBasicDetails', 'Name' );
    basicMaker.makeList( this.company.phone, 'companyBasicDetails', 'Phone');
    basicMaker.makeList( this.company.email, 'companyBasicDetails', 'Email' );
    basicMaker.makeList( this.company.contact, 'companyBasicDetails', 'Point of Contact' );

    var addressMaker = new ElementMaker();
    addressMaker.make( 'detail-space', 'ul', 'companyAddress' );
    addressMaker.makeText( 'companyAddress', 'companyAddress', 'Company Address', 'h4' );

    addressMaker.makeList( this.company.address_line_1, 'companyAddress', 'Address Line 1' );
    addressMaker.makeList( this.company.address_line_2, 'companyAddress', 'Address Line 2' );
    addressMaker.makeList( this.company.address_city, 'companyAddress', 'City' );
    addressMaker.makeList( this.company.address_region, 'companyAddress', 'Region' );
    addressMaker.makeList( this.company.address_postcode, 'companyAddress', 'Post Code' );

    var detailMaker = new ElementMaker();
    detailMaker.make( 'detail-space', 'ul', 'companyDetails' );
    detailMaker.makeText( 'companyDetails', 'companyDetails', 'Company History', 'h4' );

    detailMaker.makeList( this.company.type_of_work, 'companyDetails', 'Type Of Work' );
    detailMaker.makeList( this.company.tech_used, 'companyDetails', 'Technology Used' );
    detailMaker.makeList( this.company.past_work, 'companyDetails', 'Past Work' );
    detailMaker.makeList( this.company.preferred_work, 'companyDetails', 'Preferred Work' );

    var dateMaker = new ElementMaker();
    dateMaker.make( 'detail-space', 'ul', 'lastContactDate' );
    dateMaker.makeText( 'lastContactDate', 'lastContactDate', 'Last Contact Date', 'h4' );

    dateMaker.makeList( this.company.last_contact, 'lastContactDate', 'Last Contact' );

    var checklistMaker = new ElementMaker();
    checklistMaker.make( 'detail-space', 'ul', 'companyChecklist' );
    checklistMaker.makeText( 'companyChecklist', 'companyChecklist', 'Company Check List', 'h4' );

    checklistMaker.makeList( this.company.have_we_spoken, 'companyChecklist', 'Have we spoken?' );
    checklistMaker.makeList( this.company.have_we_met, 'companyChecklist', 'Have we met?' );
    checklistMaker.makeList( this.company.are_they_interested, 'companyChecklist', 'Are they interested?' );
    checklistMaker.makeList( this.company.external_reference, 'companyChecklist', 'External Reference?' );

    var backButton = document.createElement( 'img' );
    backButton.id = 'back';
    backButton.src = '../css/images/back.png';
    backButton.onclick = function() {
      this.back();
    }.bind( this );

    var editButton = document.createElement( 'img' );
    editButton.id = 'edit';
    editButton.src = '../css/images/edit.png';
    editButton.onclick = function() {
      this.edit( this.company.id );
    }.bind( this );

    var deleteButton = document.createElement( 'img' );
    deleteButton.id = 'delete';
    deleteButton.src = '../css/images/delete.png';
    deleteButton.onclick = function() {
      this.delete( this.company.id );
    }.bind( this );

    var commentButton = document.createElement( 'img' );
    commentButton.id = 'comment';
    commentButton.src = '../css/images/comment.png';
    commentButton.onclick = function() {
      this.comment( this.company.id );
    }.bind( this );

    detailSpace.appendChild( backButton );
    detailSpace.appendChild( editButton );
    detailSpace.appendChild( deleteButton );
    detailSpace.appendChild( commentButton );
  },

  clear: function() {
    var clear = new Clear('detail-space');
    clear.hide();
  },

  clearDetails: function() {
    var clear = new Clear('all-space');
    clear.hide();
    clear.wipe();
  },

  back: function() {
    this.clearDetails();
    var clear = new Clear('all-space');
    clear.hide();
  },

  edit: function( id ) {
    var clear = new Clear( 'edit-space' );
    clear.hide();
    console.log( this.company );

    var basicMaker = new ElementMaker();
    basicMaker.make( 'edit-space', 'ul', 'companyBasicDetailsEdit' );
    basicMaker.makeText( 'companyBasicDetailsEdit', 'companyBasicDetailsEdit', 'Basic Details', 'h4' );

    basicMaker.edit( 'companyBasicDetailsEdit', 'name', this.company.name );
    basicMaker.edit( 'companyBasicDetailsEdit', 'phone', this.company.phone );
    basicMaker.edit( 'companyBasicDetailsEdit', 'email', this.company.email );
    basicMaker.edit( 'companyBasicDetailsEdit', 'contact', this.company.contact );

    var addressMaker = new ElementMaker();
    addressMaker.make( 'edit-space', 'ul', 'companyAddressEdit' );
    addressMaker.makeText( 'companyAddressEdit', 'companyAddressEdit', 'Company Address', 'h4' );

    addressMaker.edit( 'companyAddressEdit', 'addressLine1', this.company.address_line_1 );
    addressMaker.edit( 'companyAddressEdit', 'addressLine2', this.company.address_line_2 );
    addressMaker.edit( 'companyAddressEdit', 'addressCity', this.company.address_city  );
    addressMaker.edit( 'companyAddressEdit', 'addressRegion', this.company.address_region );
    addressMaker.edit( 'companyAddressEdit', 'addressPostCode', this.company.address_postcode );

    var detailMaker = new ElementMaker();
    detailMaker.make( 'edit-space', 'ul', 'companyDetailsEdit' );
    detailMaker.makeText( 'companyDetailsEdit', 'companyDetailsEdit', 'Company History', 'h4' );

    detailMaker.edit( 'companyDetailsEdit', 'pastWork', this.company.past_work );
    detailMaker.edit( 'companyDetailsEdit', 'techUsed', this.company.tech_used );
    detailMaker.edit( 'companyDetailsEdit', 'typeOfWork', this.company.type_of_work );
    detailMaker.edit( 'companyDetailsEdit', 'preferredWork', this.company.preferred_work );

    var dateMaker = new ElementMaker();
    dateMaker.make( 'edit-space', 'ul', 'lastContactDateEdit' );
    dateMaker.makeText( 'lastContactDateEdit', 'lastContactDateEdit', 'Last Contact Date', 'h4' );
    dateMaker.edit( 'lastContactDateEdit', 'lastContact', this.company.last_contact, 'date', 'Last Contact: ' );

    var checklistMaker = new ElementMaker();
    checklistMaker.make( 'edit-space', 'ul', 'companyChecklistEdit' );
    checklistMaker.makeText( 'companyChecklistEdit', 'companyChecklistEdit', 'Company Check List', 'h4' );

    checklistMaker.edit( 'companyChecklistEdit', 'haveWeSpoken', this.company.have_we_spoken, 'checkbox', 'Have we spoken?' );
    checklistMaker.edit( 'companyChecklistEdit', 'haveWeMet', this.company.have_we_met, 'checkbox', 'Have we met?' );
    checklistMaker.edit( 'companyChecklistEdit', 'areTheyInterested', this.company.are_they_interested, 'checkbox', 'Are they interested?' );
    checklistMaker.edit( 'companyChecklistEdit', 'externalReference', this.company.external_reference, 'checkbox', 'External Reference?' );

    var editSpace = document.getElementById( 'edit-space' );

    var submitButton = document.createElement( 'img' );
    submitButton.id = 'submit';
    submitButton.src = '../css/images/tick.png';
    submitButton.onclick = function() {
      this.gatherInfo( id );
    }.bind( this )

    var cancelButton = document.createElement( 'img' );
    cancelButton.id = 'cancel';
    cancelButton.src = '../css/images/cancel.png';
    cancelButton.onclick = function() {
      this.clearDetails();
      this.show();
    }.bind( this );

    editSpace.appendChild( submitButton );
    editSpace.appendChild( cancelButton );
  },

  gatherInfo: function( id ) {
    console.log( id );
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

    this.updateDB( id, name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference );
  },

  updateDB: function( id, name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference ) {

    var request = new XMLHttpRequest();
    request.open( 'PUT', this.companyUrl + '/' + id );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
      if( request.status === 200 ) {
        var companys = JSON.parse( request.responseText )
        this.getCompany( id );
      }
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

  delete: function( id ) {
    var request = new XMLHttpRequest();
    request.open( 'DELETE', this.companyUrl + '/' + id);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
      if( request.status === 204 ) {
        location.reload();
      }
    }
    request.send();
  },

  getCompany: function( id ) {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.companyUrl + '/' + id );
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      if( request.status === 200 ) {
        var company = JSON.parse( request.responseText );
        this.company = company;
        this.clearDetails();
        this.show();
      }
    }
    request.send( null );
  },

  comment: function( id ) {
    console.log( id );
    var comments = new CommentView( id );
  },

  // returnCompany: function() {
  //   return this.company;
  // }

}

module.exports = DetailView;
