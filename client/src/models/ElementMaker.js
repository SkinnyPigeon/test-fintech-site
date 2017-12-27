var ElementGetter = require( './ElementGetter.js' );

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
    unorderedList.appendChild( whatToMake );
  },

  makeHeavyList: function( text, ul, extraText ) {
    var elementGetter = new ElementGetter();
    var unorderedList = elementGetter.getElement( ul );
    var whatToMake = document.createElement( 'h4' );

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



