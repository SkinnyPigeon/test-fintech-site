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
	var DetailView = __webpack_require__( 5 );
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
	
	    var addButton = document.createElement( 'button' );
	    addButton.innerText = "Add new...";
	    addButton.onclick = function() {
	      this.changeView();
	    }.bind( this );
	
	    this.div.appendChild( addButton );
	
	  },
	
	  showDetails: function( id ) {
	    for( var i = 0; i < this.companies.length; i++ ) {
	      if( this.companies[i].id === parseInt( id )) {
	        var detailView = new DetailView( this.companies[i] );
	      }
	    }
	  },
	
	  changeView: function() {
	    console.log( "Click" );
	    var newView = new NewView();
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
	    var elementMaker = new ElementMaker();
	    elementMaker.make( 'new-space', 'input', 'name', 'Name...' );
	    elementMaker.make( 'new-space', 'input', 'phone', 'Phone...' );
	    elementMaker.make( 'new-space', 'input', 'email', 'Email...' );
	    elementMaker.make( 'new-space', 'input', 'contact', 'Point Of Contact...' );
	
	    elementMaker.make( 'new-space', 'input', 'addressLine1', 'Address Line 1...' );
	    elementMaker.make( 'new-space', 'input', 'addressLine2', 'Address Line 2...' );
	    elementMaker.make( 'new-space', 'input', 'addressCity', 'City...' );
	    elementMaker.make( 'new-space', 'input', 'addressRegion', 'Region...' );
	    elementMaker.make( 'new-space', 'input', 'addressPostCode', 'Post Code...' );
	
	    elementMaker.make( 'new-space', 'input', 'lastContact', 'Last Contact...', 'date' );
	    elementMaker.make( 'new-space', 'input', 'pastWork', 'Previous Work...' );
	    elementMaker.make( 'new-space', 'input', 'techUsed', 'Tech Used...' );
	    elementMaker.make( 'new-space', 'input', 'typeOfWork', 'Type of work undertaken...' );
	    elementMaker.make( 'new-space', 'input', 'preferredWork', 'Preferred Work...' );
	
	    elementMaker.make( 'new-space', 'input', 'haveWeMet', 'Have we met?', 'checkbox' );
	    elementMaker.make( 'new-space', 'input', 'haveWeSpoken', 'Have we spoken?', 'checkbox' );
	    elementMaker.make( 'new-space', 'input', 'areTheyInterested', 'Are they interested?', 'checkbox' );
	    elementMaker.make( 'new-space', 'input', 'externalReference', 'External References?', 'checkbox' );
	
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
	
	    basicMaker.makeList( this.company.name, 'companyBasicDetails', 'Name' );
	    basicMaker.makeList( this.company.phone, 'companyBasicDetails', 'Phone');
	    basicMaker.makeList( this.company.email, 'companyBasicDetails', 'Email' );
	    basicMaker.makeList( this.company.contact, 'companyBasicDetails', 'Point of Contact' );
	
	    var addressMaker = new ElementMaker();
	    addressMaker.make( 'detail-space', 'ul', 'companyAddress' );
	
	    addressMaker.makeList( this.company.address_line_1, 'companyAddress', 'Address Line 1' );
	    addressMaker.makeList( this.company.address_line_2, 'companyAddress', 'Address Line 2' );
	    addressMaker.makeList( this.company.address_city, 'companyAddress', 'City' );
	    addressMaker.makeList( this.company.address_region, 'companyAddress', 'Region' );
	    addressMaker.makeList( this.company.address_postcode, 'companyAddress', 'Post Code' );
	
	    var detailMaker = new ElementMaker();
	    detailMaker.make( 'detail-space', 'ul', 'companyDetails' );
	
	    detailMaker.makeList( this.company.last_contact, 'lastContact', 'Last Contact' );
	    detailMaker.makeList( this.company.type_of_work, 'companyDetails', 'Type Of Work' );
	    detailMaker.makeList( this.company.tech_used, 'companyDetails', 'Technology Used' );
	    detailMaker.makeList( this.company.past_work, 'companyDetails', 'Past Work' );
	    detailMaker.makeList( this.company.preferred_work, 'companyDetails', 'Preferred Work' );
	
	    var detailSpace = document.getElementById( 'detail-space' );
	
	    var editButton = document.createElement( 'button' );
	    editButton.innerText = "Edit...";
	    editButton.onclick = function() {
	      this.edit( this.company.id );
	    }.bind( this );
	
	    var deleteButton = document.createElement( 'button' );
	    deleteButton.innerText = "Delete...";
	    deleteButton.onclick = function() {
	      this.edit();
	    }.bind( this );
	
	    detailSpace.appendChild( editButton );
	    detailSpace.appendChild( deleteButton );
	  },
	
	  clear: function() {
	    var detailSpace = document.getElementById( "detail-space" );
	    while( detailSpace.hasChildNodes() ) {
	      detailSpace.removeChild( detailSpace.lastChild );
	    }
	  },
	
	  edit: function( id ) {
	    console.log( this.company );
	    var elementMaker = new ElementMaker();
	
	    elementMaker.edit( 'edit-space', 'name', this.company.name );
	    elementMaker.edit( 'edit-space', 'phone', this.company.phone );
	    elementMaker.edit( 'edit-space', 'email', this.company.email );
	    elementMaker.edit( 'edit-space', 'contact', this.company.contact );
	
	    elementMaker.edit( 'edit-space', 'addressLine1', this.company.address_line_1 );
	    elementMaker.edit( 'edit-space', 'addressLine2', this.company.address_line_2 );
	    elementMaker.edit( 'edit-space', 'addressCity', this.company.address_city  );
	    elementMaker.edit( 'edit-space', 'addressRegion', this.company.address_region );
	    elementMaker.edit( 'edit-space', 'addressPostCode', this.company.address_postcode );
	
	    elementMaker.edit( 'edit-space', 'lastContact', this.company.last_contact, 'date' );
	    elementMaker.edit( 'edit-space', 'pastWork', this.company.past_work );
	    elementMaker.edit( 'edit-space', 'techUsed', this.company.tech_used );
	    elementMaker.edit( 'edit-space', 'typeOfWork', this.company.type_of_work );
	    elementMaker.edit( 'edit-space', 'preferredWork', this.company.preferred_work );
	
	    // elementMaker.edit( 'edit-space', 'input', 'haveWeMet', 'Have we met?', 'checkbox' );
	    // elementMaker.edit( 'edit-space', 'input', 'haveWeSpoken', 'Have we spoken?', 'checkbox' );
	    // elementMaker.edit( 'edit-space', 'input', 'areTheyInterested', 'Are they interested?', 'checkbox' );
	    // elementMaker.edit( 'edit-space', 'input', 'externalReference', 'External References?', 'checkbox' );
	
	
	
	    
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
	    console.log( name )
	    // var phone = elementGetter.getElementValue( 'phone' );
	    // var email = elementGetter.getElementValue( 'email' );
	    // var contact = elementGetter.getElementValue( 'contact' );
	
	    // var addressLine1 = elementGetter.getElementValue( 'addressLine1' );
	    // var addressLine2 = elementGetter.getElementValue( 'addressLine2' );
	    // var addressCity = elementGetter.getElementValue( 'addressCity' );
	    // var addressRegion = elementGetter.getElementValue( 'addressRegion' );
	    // var addressPostCode = elementGetter.getElementValue( 'addressPostCode' );
	
	    // var lastContact = elementGetter.getElementValue( 'lastContact' );
	    // var pastWork = elementGetter.getElementValue( 'pastWork' );
	    // var techUsed = elementGetter.getElementValue( 'techUsed' );
	    // var typeOfWork = elementGetter.getElementValue( 'typeOfWork' );
	    // var preferredWork = elementGetter.getElementValue( 'preferredWork' );
	
	    // var haveWeMet = elementGetter.getElementValue( 'haveWeMet' );
	    // var haveWeSpoken = elementGetter.getElementValue( 'haveWeSpoken' );
	    // var areTheyInterested = elementGetter.getElementValue( 'areTheyInterested' );
	    // var externalReference = elementGetter.getElementValue( 'externalReference' );
	
	    // this.updateDB( id, name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference );
	  },
	
	  updateDB: function( id, name, phone, email, contact, addressLine1, addressLine2, addressCity, addressRegion, addressPostCode, lastContact, pastWork, techUsed, typeOfWork, preferredWork, haveWeMet, haveWeSpoken, areTheyInterested, externalReference ) {
	  //   var request = new XMLHttpRequest();
	  //   request.open( 'PUT', this.url + id );
	  //   request.setRequestHeader( "Content-type", "application/json" );
	  //   request.onload = () => {
	  //     if( request.status === 200 ) {
	  //       var companys = JSON.parse( request.responseText )
	  //     }
	  //     // this.resetForm();
	  //     console.log( 'hello asjkdahsdl')
	  //   }
	  //   var data = {
	  //     company: {
	  //       name: name, 
	  //       phone: phone, 
	  //       email: email, 
	  //       contact: contact,
	  //       address_line_1: addressLine1, 
	  //       address_line_2: addressLine2, 
	  //       address_city: addressCity, 
	  //       address_region: addressRegion, 
	  //       address_postcode: addressPostCode, 
	  //       last_contact: lastContact, 
	  //       past_work: pastWork, 
	  //       tech_used: techUsed, 
	  //       type_of_work: typeOfWork, 
	  //       preferred_work: preferredWork, 
	  //       have_we_met: haveWeMet, 
	  //       have_we_spoken: haveWeSpoken, 
	  //       are_they_interested: areTheyInterested, 
	  //       external_reference: externalReference 
	  //     }
	  //   }
	  //   request.send( JSON.stringify( data ));
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
	    } else {
	      whatToMake.innerText = text;
	    }
	
	    // if( additional ) {
	    //   whatToMake.innerText = extraText + ': ' + additional
	    // }
	    unorderedList.appendChild( whatToMake );
	  },
	
	  edit: function( div, id, value, additional, text ) {
	    var whereToPut = document.getElementById( div );
	    var whatToMake = document.createElement( 'input' );
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
	    whereToPut.appendChild( whatToMake );
	  }
	};
	
	module.exports = ElementMaker;
	
	
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map