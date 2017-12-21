var ElementGetter = function() {
  
}

ElementGetter.prototype = {
  getElement: function( id ) {
    var elementToGet = document.getElementById( id );
    var value = elementToGet.value;
    if( elementToGet.type === 'checkbox' ) {
      value = elementToGet.checked
    }
    return value;
  }
}

module.exports = ElementGetter;