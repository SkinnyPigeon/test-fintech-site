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
      if( additional === 'checkbox' ) {
        whatToMake.type = 'checkbox';
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



