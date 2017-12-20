var ElementGetter = function( id ) {
  this.id = id;

  this.getElement();
}

ElementGetter.prototype = {
  getElement: function() {
    var elementToGet = document.getElementById( this.id );
    var value = elementToGet.value;
    console.log( value );
    return value;
  }
}

module.exports = ElementGetter;