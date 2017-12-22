/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var MainView = __webpack_require__( 1 );
	
	window.onload = function() {
	  main();
	}
	
	var main = function() {
	  var mainView = new MainView();
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ElementMaker = __webpack_require__( 7 );
	var ElementGetter = __webpack_require__( 6 );
	
	var NavView = __webpack_require__( 8 );
	var DetailView = __webpack_require__( 5 );
	var NewView = __webpack_require__( 3 );
	var SearchView = __webpack_require__( 9 );
	
	var MainView = function() {
	  this.div = document.getElementById( 'all-space' );
	  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";
	  this.companies = [];
	  this.displayNav();
	  this.getCompanies();
	}
	
	MainView.prototype = {
	
	  displayNav: function() {
	    var nav = new NavView();
	    var elementGetter = new ElementGetter();
	
	    var plusButton = elementGetter.getElement( 'add' );
	    plusButton.onclick = function() {
	      this.newView();
	    }.bind( this );
	
	    var listButton = elementGetter.getElement( 'list' );
	    listButton.onclick = function() {
	      this.getCompanies();
	    }.bind( this );
	
	    var searchButton = elementGetter.getElement( 'search' );
	    searchButton.onclick = function() {
	      this.searchView();
	    }.bind( this );
	  },
	
	  getCompanies: function() {
	    var request = new XMLHttpRequest();
	    request.open( 'GET', this.companyUrl );
	    request.setRequestHeader("Content-Type", "application/json")
	    request.onload = () => {
	      if( request.status === 200 ) {
	        var companies = JSON.parse( request.responseText );
	        this.companies = companies;
	        this.show();
	      }
	    }
	    request.send( null );
	  },
	
	  show: function() {
	    this.clear();
	    console.log( this.companies );
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
	    var newSpace = document.getElementById( "new-space" );
	    while( newSpace.hasChildNodes() ) {
	      newSpace.removeChild( newSpace.lastChild );
	    }
	    var allSpace = document.getElementById( "all-space" );
	    while( allSpace.hasChildNodes() ) {
	      allSpace.removeChild( allSpace.lastChild );
	    }
	
	    var detailSpace = document.getElementById( "detail-space" );
	    while( detailSpace.hasChildNodes() ) {
	      detailSpace.removeChild( detailSpace.lastChild );
	    }
	
	    var searchSpace = document.getElementById( "search-space" );
	    while( searchSpace.hasChildNodes() ) {
	      searchSpace.removeChild( searchSpace.lastChild );
	    }
	  },
	
	  showDetails: function( id ) {
	    for( var i = 0; i < this.companies.length; i++ ) {
	      if( this.companies[i].id === parseInt( id )) {
	        var detailView = new DetailView( this.companies[i] );
	      }
	    }
	  },
	
	  newView: function() {
	    var newView = new NewView();
	  },
	
	  searchView: function() {
	    var searchView = new SearchView( this.companies );
	  }
	}
	
	module.exports = MainView;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var ElementMaker = __webpack_require__( 7 );
	var ElementGetter = __webpack_require__( 6 );
	
	var NewView = function() {
	  this.div = document.getElementById( 'new-space' );
	  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";
	
	  this.show();
	}
	
	NewView.prototype = {
	  show: function() {
	    this.clear();
	
	    var basicMaker = new ElementMaker();
	    basicMaker.make( 'new-space', 'ul', 'companyBasicDetails' );
	    basicMaker.makeText( 'companyBasicDetails', 'companyBasicDetails', 'Basic Details', 'h4' );
	
	    basicMaker.makeListItem(  'companyBasicDetails', 'name', 'Name...'  );
	    basicMaker.makeListItem( 'companyBasicDetails', 'phone', 'Phone...' );
	    basicMaker.makeListItem( 'companyBasicDetails', 'email', 'Email...' );
	    basicMaker.makeListItem( 'companyBasicDetails', 'contact', 'Point Of Contact...' );
	
	    var addressMaker = new ElementMaker();
	    addressMaker.make( 'new-space', 'ul', 'companyAddress' );
	    addressMaker.makeText( 'companyAddress', 'companyAddress', 'Company Address', 'h4' );
	
	    addressMaker.makeListItem( 'companyAddress', 'addressLine1', 'Address Line 1' );
	    addressMaker.makeListItem( 'companyAddress', 'addressLine2', 'Address Line 2...' );
	    addressMaker.makeListItem( 'companyAddress', 'addressCity', 'City...' );
	    addressMaker.makeListItem( 'companyAddress', 'addressRegion', 'Region...' );
	    addressMaker.makeListItem( 'companyAddress', 'addressPostCode', 'Post Code...' );
	
	    var dateMaker = new ElementMaker();
	    dateMaker.make( 'new-space', 'ul', 'lastContactDate' );
	    dateMaker.makeText( 'lastContactDate', 'lastContactDate', 'Last Contact Date', 'h4' );
	
	    dateMaker.makeListItem( 'lastContactDate', 'lastContact', 'Last Contact...', 'date' );
	
	    var detailMaker = new ElementMaker();
	    detailMaker.make( 'new-space', 'ul', 'companyDetails' );
	    detailMaker.makeText( 'companyDetails', 'companyDetails', 'Company History', 'h4' );
	
	    detailMaker.makeListItem( 'companyDetails', 'pastWork', 'Previous Work...' );
	    detailMaker.makeListItem( 'companyDetails', 'techUsed', 'Tech Used...' );
	    detailMaker.makeListItem( 'companyDetails', 'typeOfWork', 'Type Of Work Undertaken...' );
	    detailMaker.makeListItem( 'companyDetails', 'preferredWork', 'Preferred Work...' );
	
	    var checklistMaker = new ElementMaker();
	    checklistMaker.make( 'new-space', 'ul', 'companyChecklist' );
	    checklistMaker.makeText( 'companyChecklist', 'companyChecklist', 'Company Check List', 'h4' );
	
	    checklistMaker.makeListItem( 'companyChecklist', 'haveWeMet', 'Have We Met?', 'checkbox' );
	    checklistMaker.makeListItem( 'companyChecklist', 'haveWeSpoken', 'Have We Spoken?', 'checkbox' );
	    checklistMaker.makeListItem( 'companyChecklist', 'areTheyInterested', 'Are They Interested?', 'checkbox' );
	    checklistMaker.makeListItem( 'companyChecklist', 'externalReference', 'External References?', 'checkbox' );
	
	    var submit = document.createElement( 'button' );
	    submit.innerText = "Submit";
	    submit.onclick = function() {
	      this.gatherInfo();
	    }.bind( this );
	    this.div.appendChild( submit );
	  },
	
	
	  clear: function() {
	    var newSpace = document.getElementById( "new-space" );
	    while( newSpace.hasChildNodes() ) {
	      newSpace.removeChild( newSpace.lastChild );
	    }
	    var allSpace = document.getElementById( "all-space" );
	    while( allSpace.hasChildNodes() ) {
	      allSpace.removeChild( allSpace.lastChild );
	    }
	
	    var detailSpace = document.getElementById( "detail-space" );
	    while( detailSpace.hasChildNodes() ) {
	      detailSpace.removeChild( detailSpace.lastChild );
	    }
	
	    var searchSpace = document.getElementById( "search-space" );
	    while( searchSpace.hasChildNodes() ) {
	      searchSpace.removeChild( searchSpace.lastChild );
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

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var ElementMaker = __webpack_require__( 7 );
	var ElementGetter = __webpack_require__( 6 );
	
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
	    detailMaker.makeText( 'companyDetails', 'companyDetails', 'Last Contact Date', 'h4' );
	
	    detailMaker.makeList( this.company.last_contact, 'companyDetails', 'Last Contact' );
	
	    detailMaker.makeText( 'companyDetails', 'companyDetails', 'Company History', 'h4' );
	
	    detailMaker.makeList( this.company.type_of_work, 'companyDetails', 'Type Of Work' );
	    detailMaker.makeList( this.company.tech_used, 'companyDetails', 'Technology Used' );
	    detailMaker.makeList( this.company.past_work, 'companyDetails', 'Past Work' );
	    detailMaker.makeList( this.company.preferred_work, 'companyDetails', 'Preferred Work' );
	
	    var checklistMaker = new ElementMaker();
	    checklistMaker.make( 'detail-space', 'ul', 'companyChecklist' );
	    checklistMaker.makeText( 'companyChecklist', 'companyChecklist', 'Company Check List', 'h4' );
	
	    checklistMaker.makeList( this.company.have_we_spoken, 'companyChecklist', 'Have we spoken?' );
	    checklistMaker.makeList( this.company.have_we_met, 'companyChecklist', 'Have we met?' );
	    checklistMaker.makeList( this.company.are_they_interested, 'companyChecklist', 'Are they interested?' );
	    checklistMaker.makeList( this.company.external_reference, 'companyChecklist', 'External Reference?' );
	
	    var detailSpace = document.getElementById( 'detail-space' );
	
	    var editButton = document.createElement( 'button' );
	    editButton.innerText = "Edit...";
	    editButton.onclick = function() {
	      this.clear();
	      this.edit( this.company.id );
	    }.bind( this );
	
	    var deleteButton = document.createElement( 'button' );
	    deleteButton.innerText = "Delete...";
	    deleteButton.onclick = function() {
	      this.delete( this.company.id );
	    }.bind( this );
	
	    var backButton = document.createElement( 'button' );
	    backButton.innerText = "Back...";
	    backButton.onclick = function() {
	      location.reload();
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
	    var basicMaker = new ElementMaker();
	    basicMaker.make( 'edit-space', 'ul', 'companyBasicDetails' );
	    basicMaker.makeText( 'companyBasicDetails', 'companyBasicDetails', 'Basic Details', 'h4' );
	
	    basicMaker.edit( 'companyBasicDetails', 'name', this.company.name );
	    basicMaker.edit( 'companyBasicDetails', 'phone', this.company.phone );
	    basicMaker.edit( 'companyBasicDetails', 'email', this.company.email );
	    basicMaker.edit( 'companyBasicDetails', 'contact', this.company.contact );
	
	    var addressMaker = new ElementMaker();
	    addressMaker.make( 'edit-space', 'ul', 'companyAddress' );
	    addressMaker.makeText( 'companyAddress', 'companyAddress', 'Company Address', 'h4' );
	
	    addressMaker.edit( 'companyAddress', 'addressLine1', this.company.address_line_1 );
	    addressMaker.edit( 'companyAddress', 'addressLine2', this.company.address_line_2 );
	    addressMaker.edit( 'companyAddress', 'addressCity', this.company.address_city  );
	    addressMaker.edit( 'companyAddress', 'addressRegion', this.company.address_region );
	    addressMaker.edit( 'companyAddress', 'addressPostCode', this.company.address_postcode );
	
	    var dateMaker = new ElementMaker();
	    dateMaker.make( 'edit-space', 'ul', 'lastContactDate' );
	    dateMaker.makeText( 'lastContactDate', 'lastContactDate', 'Last Contact Date', 'h4' );
	    dateMaker.edit( 'lastContactDate', 'lastContact', this.company.last_contact, 'date', 'Last Contact: ' );
	
	    var detailMaker = new ElementMaker();
	    detailMaker.make( 'edit-space', 'ul', 'companyDetails' );
	    detailMaker.makeText( 'companyDetails', 'companyDetails', 'Company History', 'h4' );
	
	    detailMaker.edit( 'companyDetails', 'pastWork', this.company.past_work );
	    detailMaker.edit( 'companyDetails', 'techUsed', this.company.tech_used );
	    detailMaker.edit( 'companyDetails', 'typeOfWork', this.company.type_of_work );
	    detailMaker.edit( 'companyDetails', 'preferredWork', this.company.preferred_work );
	
	    var checklistMaker = new ElementMaker();
	    checklistMaker.make( 'edit-space', 'ul', 'companyChecklist' );
	    checklistMaker.makeText( 'companyChecklist', 'companyChecklist', 'Company Check List', 'h4' );
	
	    checklistMaker.edit( 'companyChecklist', 'haveWeSpoken', this.company.have_we_spoken, 'checkbox', 'Have we spoken?' );
	    checklistMaker.edit( 'companyChecklist', 'haveWeMet', this.company.have_we_met, 'checkbox', 'Have we met?' );
	    checklistMaker.edit( 'companyChecklist', 'areTheyInterested', this.company.are_they_interested, 'checkbox', 'Are they interested?' );
	    checklistMaker.edit( 'companyChecklist', 'externalReference', this.company.external_reference, 'checkbox', 'External Reference?' );
	
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
	        location.reload();
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
	  }
	
	}
	
	module.exports = DetailView;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var ElementGetter = function() {
	
	}
	
	ElementGetter.prototype = {
	
	  getElement: function( id ) {
	    var elementToGet = document.getElementById( id );
	    return elementToGet;
	  },
	
	  getElementValue: function( id ) {
	    var elementToGet = document.getElementById( id );
	    var value = elementToGet.value;
	    if( elementToGet.type === 'checkbox' ) {
	      value = elementToGet.checked
	    }
	    return value;
	  },
	
	  resetElement: function( id ) {
	    var elementToGet = document.getElementById( id );
	    if ( elementToGet.type === 'date' ) {
	      elementToGet.value = '';
	    } else if( elementToGet.type !== 'checkbox' ) {
	      elementToGet.value = elementToGet.placeholder
	    } else {
	      elementToGet.checked = false;
	    }
	  }
	}
	
	module.exports = ElementGetter;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var ElementGetter = __webpack_require__( 6 );
	
	var ElementMaker = function() {
	 
	};
	
	ElementMaker.prototype = {
	
	  make: function( div, element, id, text, additional, edit ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( element );
	    whatToMake.id = id;
	
	    switch( element ) {
	      case 'ul':
	        whereToPut.appendChild( whatToMake );
	        break;
	      case 'input':
	        if( edit ) {
	          whatToMake.value = text;
	          whereToPut.appendChild( whatToMake );
	          return;
	        }
	        whatToMake.placeholder = text;
	        if( additional ) {
	          whatToMake.type = additional;
	          var additionalText = document.createElement( 'p' );
	          additionalText.innerText = text;
	          whereToPut.appendChild( additionalText );
	        }
	        whereToPut.appendChild( whatToMake );
	        break;
	      default:
	        whatToMake.innerText = text;
	        whereToPut.appendChild( whatToMake );
	    }
	  },
	
	  makeList: function( text, ul, extraText ) {
	    var elementGetter = new ElementGetter();
	    var unorderedList = elementGetter.getElement( ul );
	    var whatToMake = document.createElement( 'li' );
	
	    if( extraText ) {
	      whatToMake.innerText = extraText + ": " + text;
	      console.log( whatToMake.innerText );
	    } else {
	      whatToMake.innerText = text;
	    }
	    unorderedList.appendChild( whatToMake );
	  },
	
	  edit: function( div, id, value, additional, text ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( 'input' );
	    var howToPutIt = document.createElement( 'li' );
	
	    whatToMake.id = id;
	    switch( additional ) {
	      case 'checkbox':
	        whatToMake.type = additional;
	        var additionalText = document.createElement( 'p' );
	        additionalText.innerText = text;
	        whereToPut.appendChild( additionalText );
	        whatToMake.checked = value;
	        break;
	      case 'date':
	        whatToMake.type = additional;
	        var additionalText = document.createElement( 'p' );
	        additionalText.innerText = text;
	        whereToPut.appendChild( additionalText );
	        whatToMake.value = value;
	        break; 
	    }
	    whatToMake.value = value;
	    howToPutIt.appendChild( whatToMake );
	    whereToPut.appendChild( howToPutIt );
	  },
	
	  makeListItem: function( div, id, value, additional ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( 'input' );
	    var howToPutIt = document.createElement( 'li' );
	
	    whatToMake.id = id;
	
	    switch( additional ) {
	      case 'checkbox':
	        whatToMake.type = additional;
	        var additionalText = document.createElement( 'p' );
	        additionalText.innerText = value;
	        whereToPut.appendChild( additionalText );
	        break;
	      case 'date':
	        whatToMake.type = additional;
	        var additionalText = document.createElement( 'p' );
	        additionalText.innerText = value;
	        whereToPut.appendChild( additionalText );
	        break; 
	    }
	
	    whatToMake.placeholder = value;
	
	    howToPutIt.appendChild( whatToMake );
	    whereToPut.appendChild( howToPutIt );
	  },
	
	  makeText: function( div, id, text, style ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( style );
	    whatToMake.id = id;
	
	    whatToMake.innerText = text;
	    whereToPut.appendChild( whatToMake );
	  }
	};
	
	module.exports = ElementMaker;
	
	
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var ElementMaker = __webpack_require__( 7 );
	var ElementGetter = __webpack_require__( 6 );
	
	var NavView = function() {
	  this.show();
	}
	
	NavView.prototype = {
	  show: function() {
	    var elementGetter = new ElementGetter();
	    var elementMaker = new ElementMaker();
	
	    var titleSpace = elementGetter.getElement( 'title-space' );
	    var logo = document.createElement( 'img' );
	    logo.id = 'logo';
	    logo.src = './css/images/logo.png';
	    titleSpace.appendChild( logo );
	
	    var navSpace = elementGetter.getElement( 'nav-space' );
	    var navList = document.createElement( 'ul' );
	    navList.id = 'navList';
	
	    var home = document.createElement( 'img' );
	    home.id = 'home';
	    home.src = './css/images/home.png';
	    navList.appendChild( home );
	
	    var list = document.createElement( 'img' );
	    list.id = 'list';
	    list.src = './css/images/list.png';
	    navList.appendChild( list );
	
	    var add = document.createElement( 'img' );
	    add.id = 'add';
	    add.src = './css/images/add.png';
	    navList.appendChild( add );
	
	    var search = document.createElement( 'img' );
	    search.id = 'search';
	    search.src = './css/images/search.png';
	    navList.appendChild( search );
	
	    navSpace.appendChild( navList );
	  }
	}
	
	module.exports = NavView;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var ElementMaker = __webpack_require__( 7 );
	var ElementGetter = __webpack_require__( 6 );
	
	var ResultsView = __webpack_require__( 10 );
	
	var SearchView = function( companies ) {
	  this.companies = companies;
	  this.show();
	}
	
	SearchView.prototype = {
	
	  show: function() {
	    this.clear();
	    var elementMaker = new ElementMaker();
	    elementMaker.make( 'search-space', 'ul', 'directSearch' );
	    elementMaker.makeText( 'directSearch', 'directSearch', 'Targetted Search', 'h4' );
	
	    elementMaker.makeListItem(  'directSearch', 'name', 'Name...'  );
	    elementMaker.makeListItem( 'directSearch', 'city', 'City...' );
	    elementMaker.makeListItem( 'directSearch', 'tech', 'Technology...' );
	
	    var searchSpace = document.getElementById( 'search-space' );
	    var targetButton = document.createElement( 'img' );
	    targetButton.id = 'targetButton';
	    targetButton.src = './css/images/tick.png';
	    targetButton.onclick = function() {
	      this.targetSearch();
	    }.bind( this );
	
	    searchSpace.appendChild( targetButton );
	
	    elementMaker.make( 'search-space', 'ul', 'generalSearch' );
	    elementMaker.makeText( 'generalSearch', 'generalSearch', 'General Search', 'h4' );
	
	    elementMaker.makeListItem(  'generalSearch', 'name', 'What to search...'  );
	
	    var searchSpace = document.getElementById( 'search-space' );
	    var generalButton = document.createElement( 'img' );
	    generalButton.id = 'generalButton';
	    generalButton.src = './css/images/tick.png';
	    generalButton.onclick = function() {
	      this.generalSearch();
	    }.bind( this );
	
	    searchSpace.appendChild( generalButton );
	  },
	
	  clear: function() {
	    var newSpace = document.getElementById( "new-space" );
	    while( newSpace.hasChildNodes() ) {
	      newSpace.removeChild( newSpace.lastChild );
	    }
	    var allSpace = document.getElementById( "all-space" );
	    while( allSpace.hasChildNodes() ) {
	      allSpace.removeChild( allSpace.lastChild );
	    }
	
	    var detailSpace = document.getElementById( "detail-space" );
	    while( detailSpace.hasChildNodes() ) {
	      detailSpace.removeChild( detailSpace.lastChild );
	    }
	
	    var searchSpace = document.getElementById( "search-space" );
	    while( searchSpace.hasChildNodes() ) {
	      searchSpace.removeChild( searchSpace.lastChild );
	    }
	  },
	
	  targetSearch: function() {
	    var elementGetter = new ElementGetter();
	    var name = elementGetter.getElementValue( 'name' );
	    var city = elementGetter.getElementValue( 'city' );
	    var tech = elementGetter.getElementValue( 'tech' );
	    console.log( name)
	  },
	
	  generalSearch: function() {
	    console.log( 'General')
	  },
	
	}
	
	module.exports = SearchView;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var ResultsView = function( companies ) {
	  this.companies = companies;
	}
	
	ResultsView.prototype = {
	
	  
	  clear: function() {
	    var newSpace = document.getElementById( "new-space" );
	    while( newSpace.hasChildNodes() ) {
	      newSpace.removeChild( newSpace.lastChild );
	    }
	    var allSpace = document.getElementById( "all-space" );
	    while( allSpace.hasChildNodes() ) {
	      allSpace.removeChild( allSpace.lastChild );
	    }
	
	    var detailSpace = document.getElementById( "detail-space" );
	    while( detailSpace.hasChildNodes() ) {
	      detailSpace.removeChild( detailSpace.lastChild );
	    }
	
	    var searchSpace = document.getElementById( "search-space" );
	    while( searchSpace.hasChildNodes() ) {
	      searchSpace.removeChild( searchSpace.lastChild );
	    }
	  }
	
	}
	
	module.exports = ResultsView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map