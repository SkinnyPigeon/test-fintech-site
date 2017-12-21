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