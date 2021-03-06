var Clear = function( toShow ) {
  this.toShow = toShow;
  this.spaces = [ "new-space", "all-space", "detail-space", "search-space", "edit-space","comment-space", "home-space", "edit-comment-space", "single-comment-space", "warn-space" ];
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
    for( var i = 0; i < this.spaces.length; i++ ) {
      if( this.spaces[i] !== this.toShow ) {
        var spaceToWipe = document.getElementById( this.spaces[i] );
        while( spaceToWipe.hasChildNodes() ) {
          spaceToWipe.removeChild( spaceToWipe.lastChild ); 
        }
      }
    }
  }
}

module.exports = Clear;