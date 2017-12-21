var ElementGetter = require( './ElementGetter.js' );

var ElementMaker = function() {
  // div, element, id, text, additional 
  // this.div = div;
  // this.element = element;
  // this.id = id;
  // this.text = text;
  // this.additional = additional;

  // this.make( this.div, this.element, this.id, this.text, this.additional );
};

ElementMaker.prototype = {

  // make: function( div, element, id, text, additional, edit ) {
  //   var whereToPut = document.getElementById( div );
  //   var whatToMake = document.createElement( element );
  //   whatToMake.id = id;
  //   if( edit ) {
  //     // if( additional ) {
  //     //   whatToMake.type = additional
  //     //   var checkText = document.createElement( 'p' );
  //     //   checkText.innerText = text;
  //     //   whereToPut.appendChild( checkText );
  //     // }
  //     whatToMake.value = text;
  //     whereToPut.appendChild( whatToMake );
  //     return;
  //   }
  //   if( element === 'input' ) {
  //     whatToMake.placeholder = text;
  //     if( additional ) {
  //       whatToMake.type = additional;
  //       var checkText = document.createElement( 'p' );
  //       checkText.innerText = text;
  //       whereToPut.appendChild( checkText );
  //     }
  //   } else if ( element === 'img' ) {
  //     whatToMake.src = text
  //   } else if ( element === 'ul' ) {
  //     whereToPut.appendChild( whatToMake );
  //     return;
  //   } else {
  //     whatToMake.innerText = text;
  //   };
  //   whereToPut.appendChild( whatToMake );
  // },

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

  makeList: function( text, ul, additional ) {
    var elementGetter = new ElementGetter();
    var unorderedList = elementGetter.getElement( ul );
    var whatToMake = document.createElement( 'li' );

    if( additional ) {
      whatToMake.innerText = additional + ": " + text;
    } else {
      whatToMake.innerText = text;
    }
    unorderedList.appendChild( whatToMake );
  }
};

module.exports = ElementMaker;



