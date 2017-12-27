var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );
var Clear = require( '../models/Clear.js' );

var DetailCommentView = function( comment ) {
  this.comment = comment;
  this.commentUrl = "https://fintech-db-test.herokuapp.com/comments";

  this.show();
}

DetailCommentView.prototype = {

  show: function() {
    this.clearComment( 'single-comment-space' );

    var commentMaker = new ElementMaker();
    commentMaker.make( 'single-comment-space', 'ul', 'singleCommentDetails' );
    commentMaker.makeText( 'singleCommentDetails', 'singleCommentDetails', 'Comment', 'h4' );

    commentMaker.makeList( this.comment.author, 'singleCommentDetails', 'Author' );
    commentMaker.makeList( this.comment.text, 'singleCommentDetails', 'Comment');

    var commentSpace = document.getElementById( 'single-comment-space' );

    var backButton = document.createElement( 'img' );
    backButton.id = 'back';
    backButton.src = '../css/images/back.png';
    backButton.onclick = function() {
      this.back();
    }.bind( this );

    var editButton = document.createElement( 'img' );
    editButton.id = 'edit';
    editButton.src = '../css/images/edit.png';
    editButton.onclick = function() {
      this.edit( this.comment.id );
    }.bind( this );

    var deleteButton = document.createElement( 'img' );
    deleteButton.id = 'delete';
    deleteButton.src = '../css/images/delete.png';
    deleteButton.onclick = function() {
      this.delete( this.comment.id );
    }.bind( this );

    commentSpace.appendChild( backButton );
    commentSpace.appendChild( editButton );
    commentSpace.appendChild( deleteButton );
  },

  clearComment: function( space ) {
    var clearSpace = new Clear( 'comment-space' );
    clearSpace.wipe();
    clearSpace.hide();
    var clear = new Clear( space );
    clear.hide();
    // clear.wipe();
  },

  back: function() {
    var clear = new Clear( 'comment-space' );
    clear.hide();
  },

  edit: function( id ) {
    var clear = new Clear( 'edit-comment-space' );
    clear.hide();
    console.log( id )
    var commentEdit = new ElementMaker();
    commentEdit.make( 'edit-comment-space', 'ul', 'editCommentDetails' );
    commentEdit.makeText( 'editCommentDetails', 'editCommentDetails', 'Edit Comment', 'h4' );

    commentEdit.edit( 'editCommentDetails', 'authorEdit', this.comment.author );
    commentEdit.edit( 'editCommentDetails', 'textEdit', this.comment.text );

    var editSpace = document.getElementById( 'edit-comment-space' );

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
      this.clearComment( 'edit-comment-space' );
      this.show();
    }.bind( this );

    editSpace.appendChild( submitButton );
    editSpace.appendChild( cancelButton );

  },

  gatherInfo: function( id ) {
    var elementGetter = new ElementGetter();
    var author = elementGetter.getElementValue( 'authorEdit' );
    var text = elementGetter.getElementValue( 'textEdit' );
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
        this.clearComment( 'edit-comment-space' );
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

  displayDeleted: function() {
    this.clearComment();

    var deleteSpace = document.getElementById( 'comment-space' );
    var deleteMessage = document.createElement( 'h3' );
    deleteMessage.id = 'deleteMessage';
    deleteMessage.innerText = 'Comment Deleted. Click below to undo';

    var undo = document.createElement( 'img' );
    undo.id = 'undo';
    undo.src = '../css/images/undo.png';
    undo.onclick = function() {
      this.undo();
    }.bind( this );

    deleteSpace.appendChild( deleteMessage );
    deleteSpace.appendChild( undo );
  },

  undo: function() {
    var request = new XMLHttpRequest();
    request.open( 'POST', this.commentUrl);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
      if( request.status === 201 ) {
        var comments = JSON.parse( request.responseText )
        this.show();
      }
    }
    var data = {
      comment: {
        author: this.comment.author, 
        text: this.comment.text, 
        company_id: this.comment.company_id
      }
    }
    request.send( JSON.stringify( data ));
  } 

}

module.exports = DetailCommentView;