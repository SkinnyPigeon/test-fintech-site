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