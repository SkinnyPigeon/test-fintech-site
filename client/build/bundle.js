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

	var ElementMaker = __webpack_require__( 2 );
	var NewView = __webpack_require__( 3 );
	
	var MainView = function() {
	  this.div = document.getElementById( 'all-space' );
	  this.companyUrl = "https://fintech-db-test.herokuapp.com/companys";
	  this.companies = [];
	
	  this.getCompanies();
	}
	
	MainView.prototype = {
	
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
	    console.log( this.companies );
	
	    for( var i = 0; i < this.companies.length; i++ ) {
	      var elementMaker = new ElementMaker( 'all-space', 'ul', this.companies[i].id );
	      var companyName = elementMaker.makeList( this.companies[i].name, this.companies[i].id );
	      var companyPhone = elementMaker.makeList( this.companies[i].phone, this.companies[i].id );
	      var companyEmail = elementMaker.makeList( this.companies[i].email, this.companies[i].id );
	    }
	
	    var addButton = document.createElement( 'button' );
	    addButton.innerText = "Add new...";
	    addButton.onclick = function() {
	      this.changeView();
	    }.bind( this );
	
	    this.div.appendChild( addButton );
	
	  },
	
	  changeView: function() {
	    console.log( "Click" );
	    var newView = new NewView();
	  }
	}
	
	module.exports = MainView;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var ElementGetter = __webpack_require__( 4 );
	
	var ElementMaker = function( div, element, id, text, additional ) {
	  this.div = div;
	  this.element = element;
	  this.id = id;
	  this.text = text;
	  this.additional = additional;
	
	  this.make( this.div, this.element, this.id, this.text, this.additional );
	};
	
	ElementMaker.prototype = {
	
	  make: function( div, element, id, text, additional ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( element );
	    whatToMake.id = id;
	    if( element === 'input' ) {
	      whatToMake.placeholder = text;
	      if( additional ) {
	        whatToMake.type = additional;
	        var checkText = document.createElement( 'p' );
	        checkText.innerText = text;
	        whereToPut.appendChild( checkText );
	      }
	    } else if ( element === 'img' ) {
	      whatToMake.src = text
	    } else if ( element === 'ul' ) {
	      whereToPut.appendChild( whatToMake );
	      return;
	    } else {
	      whatToMake.innerText = text;
	    };
	    whereToPut.appendChild( whatToMake );
	  },
	
	  makeList: function( text, ul ) {
	    var elementGetter = new ElementGetter();
	    var unorderedList = elementGetter.getElement( ul );
	    var whatToMake = document.createElement( 'li' );
	
	    whatToMake.innerText = text;
	    unorderedList.appendChild( whatToMake );
	  }
	};
	
	module.exports = ElementMaker;
	
	
	


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var ElementMaker = __webpack_require__( 2 );
	var ElementGetter = __webpack_require__( 4 );
	
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
	
	    var name = elementGetter.getElementValue( 'name' );
	    var phone = elementGetter.getElementValue( 'phone' );
	    var email = elementGetter.getElementValue( 'email' );
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
	      this.resetForm();
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
	  },
	
	  resetForm: function() {
	    var elementGetter = new ElementGetter();
	    
	    elementGetter.resetElement( 'name' );
	    elementGetter.resetElement( 'phone' );
	    elementGetter.resetElement( 'email' );
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
/* 4 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map