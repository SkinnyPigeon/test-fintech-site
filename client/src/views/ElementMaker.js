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



