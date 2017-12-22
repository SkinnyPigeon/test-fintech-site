var Clear = function() {
  this.run();
}

Clear.prototype = {
  run: function() {
    var newSpace = document.getElementById( "new-space" );
    while( newSpace.hasChildNodes() ) {
      newSpace.removeChild( newSpace.lastChild );
    }
    var allSpace = document.getElementById( "all-space" );
    while( allSpace.hasChildNodes() ) {
      allSpace.removeChild( allSpace.lastChild );
    }

    var detailSpace = document.getElementById( "detail-space" );
    while( detailSpace.hasChildNodes() ) {
      detailSpace.removeChild( detailSpace.lastChild );
    }

    var searchSpace = document.getElementById( "search-space" );
    while( searchSpace.hasChildNodes() ) {
      searchSpace.removeChild( searchSpace.lastChild );
    }

    var editSpace = document.getElementById( "edit-space" );
    while( editSpace.hasChildNodes() ) {
      editSpace.removeChild( editSpace.lastChild );
    }

    var commentSpace = document.getElementById( "comment-space" );
    while( commentSpace.hasChildNodes() ) {
      commentSpace.removeChild( commentSpace.lastChild );
    }

    var homeSpace = document.getElementById( "home-space" );
    while( homeSpace.hasChildNodes() ) {
      homeSpace.removeChild( homeSpace.lastChild );
    }
  }
}

module.exports = Clear;