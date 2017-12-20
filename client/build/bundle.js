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
	
	    var addButton = new ElementMaker( 'all-space', 'img', 'addButton', '../css/images/add.png' );
	
	  },
	
	  changeView: function() {
	
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
	
	  make: function( div, element, id, text ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( element );
	    whatToMake.id = id;
	    if( element === 'input' ) {
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
/***/ function(module, exports) {

	var NewView = function() {
	  this.show();
	}
	
	NewView.prototype = {
	  show: function() {
	    console.log( "hello" );
	  },
	}
	
	module.exports = NewView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map