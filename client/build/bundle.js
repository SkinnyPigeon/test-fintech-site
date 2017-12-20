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
/***/ function(module, exports) {

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
	    } else {
	      whatToMake.innerText = text;
	    };
	    whereToPut.appendChild( whatToMake );
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
	    
	  }
	
	}
	
	module.exports = NewView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var ElementGetter = function( id ) {
	  this.id = id;
	
	  this.getElement();
	}
	
	ElementGetter.prototype = {
	  getElement: function() {
	    var elementToGet = document.getElementById( this.id );
	    var value = elementToGet.value;
	    if( elementToGet.type === 'checkbox' ) {
	      value = elementToGet.checked
	    }
	    console.log( value );
	    return value;
	  }
	}
	
	module.exports = ElementGetter;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map