var Clear = function( toShow ) {
  this.toShow = toShow;
  this.spaces = [ "new-space", "all-space", "detail-space", "search-space", "edit-space","comment-space", "home-space" ];
}

Clear.prototype = {
  hide: function() {

    for( var i = 0; i < this.spaces.length; i++ ) {
      var spaceToHide = document.getElementById( this.spaces[i] );
      spaceToHide.style.display = 'none'
    }

    var spaceToShow = document.getElementById( this.toShow );
    spaceToShow.style.display = 'block';

  },

  wipe: function() {
    var spaceToWipe = document.getElementById( this.toShow );
    while( spaceToWipe.hasChildNodes() ) {
      spaceToWipe.removeChild( spaceToWipe.lastChild ); 
    }
  }
}

module.exports = Clear;