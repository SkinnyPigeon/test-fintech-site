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

	var ElementMaker = function( div, element, id, text ) {
	  this.div = div;
	  this.element = element;
	  this.id = id;
	  this.text = text;
	
	  this.make( this.div, this.element, this.id, this.text );
	};
	
	ElementMaker.prototype = {
	
	  make: function( div, element, id, text, additional ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( element );
	    whatToMake.id = id;
	    if( element === 'input' ) {
	      if( additional === 'checkbox' ) {
	        console.log( "AHJdskhakskjh")
	        whatToMake.type = 'checkbox';
	      }
	      whatToMake.placeholder = text;
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
	
	var NewView = function() {
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
	    var lastContact = new ElementMaker( 'new-space', 'input', 'lastContact', 'Last Contact (YYYY-MM_DD )...' );
	    var pastWork = new ElementMaker( 'new-space', 'input', 'pastWork', 'Previous Work...' );
	    var techUsed = new ElementMaker( 'new-space', 'input', 'techUsed', 'Tech Used...' );
	    var typeOfWork = new ElementMaker( 'new-space', 'input', 'typeOfWork', 'Type of work undetaken...' );
	    var preferredWork = new ElementMaker( 'new-space', 'input', 'preferredWork', 'Preferred Work...' );
	    var haveWeMet = new ElementMaker( 'new-space', 'input', 'haveWeMet', 'Have we met?', 'checkbox' );
	  },
	}
	
	module.exports = NewView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map