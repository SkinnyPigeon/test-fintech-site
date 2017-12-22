var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

// var CommentView = require( './CommentView.js' );

var DetailCommentView = function( comment ) {
  this.comment = comment;
  this.commentUrl = "https://fintech-db-test.herokuapp.com/comments";

  this.show();
}

DetailCommentView.prototype = {

  show: function() {
    this.clear();

    var commentMaker = new ElementMaker();
    commentMaker.make( 'comment-space', 'ul', 'commentDetails' );
    commentMaker.makeText( 'commentDetails', 'commentDetails', 'Comment', 'h4' );

    commentMaker.makeList( this.comment.author, 'commentDetails', 'Author' );
    commentMaker.makeList( this.comment.text, 'commentDetails', 'Comment');

    var commentSpace = document.getElementById( 'comment-space' );

    var editButton = document.createElement( 'img' );
    editButton.id = 'edit';
    editButton.src = '../css/images/edit.png';
    editButton.onclick = function() {
      this.clear();
      this.edit( this.comment.id );
    }.bind( this );

    var deleteButton = document.createElement( 'img' );
    deleteButton.id = 'delete';
    deleteButton.src = '../css/images/delete.png';
    deleteButton.onclick = function() {
      this.delete( this.comment.id );
    }.bind( this );

    commentSpace.appendChild( editButton );
    commentSpace.appendChild( deleteButton );
  },

  clear: function() {
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
  },

  edit: function( id ) {
    var commentEdit = new ElementMaker();
    commentEdit.make( 'comment-space', 'ul', 'commentDetails' );
    commentEdit.makeText( 'commentDetails', 'commentDetails', 'Edit Comment', 'h4' );

    commentEdit.edit( 'commentDetails', 'author', this.comment.author );
    commentEdit.edit( 'commentDetails', 'text', this.comment.text );

    var editSpace = document.getElementById( 'comment-space' );

    var submitButton = document.createElement( 'img' );
    submitButton.id = 'submit';
    submitButton.src = '../css/images/tick.png';
    submitButton.onclick = function() {
      this.gatherInfo( id );
    }.bind( this )

    var cancelButton = document.createElement( 'img' );
    cancelButton.id = 'cancel';
    cancelButton.src = '../css/images/cancel.png';
    cancelButton.onclick = function() {
      this.show();
    }.bind( this );

    editSpace.appendChild( submitButton );
    editSpace.appendChild( cancelButton );

  },

  gatherInfo: function( id ) {
    console.log( id );
    var elementGetter = new ElementGetter();
    var author = elementGetter.getElementValue( 'author' );
    var text = elementGetter.getElementValue( 'text' );
    this.updateDB( id, author, text );
  },

  updateDB: function( id, author, text ) {
    var request = new XMLHttpRequest();
    request.open( 'PUT', this.commentUrl + '/' + id );
    request.setRequestHeader( "Content-type", "application/json" );
    request.onload = () => {
      if( request.status === 200 ) {
        var comment = JSON.parse( request.responseText )
        this.comment = comment;
        this.show();
      }
    }
    var data = {
      comment: {
        author: author, 
        text: text, 
        id: id
      }
    }
    request.send( JSON.stringify( data ));
  },


  delete: function(id) {
    var request = new XMLHttpRequest();
    request.open( 'DELETE', this.commentUrl + '/' + id);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = () => {
      if( request.status === 204 ) {
        this.displayDeleted();
      }
    }
    request.send();
  }, 

}

module.exports = DetailCommentView;