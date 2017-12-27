var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );
var Clear = require( '../models/Clear.js' );

var DetailCommentView = require( './DetailCommentView.js' );

var CommentView = function( id ) {
  this.id = id;
  this.comments = [];
  this.commentUrl = "https://fintech-db-test.herokuapp.com/comments";

  this.getComments(id);
}

CommentView.prototype = {
  getComments: function(id) {
    this.comments = [];

    var request = new XMLHttpRequest();
    request.open( 'GET', this.commentUrl );
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      if( request.status === 200 ) {
        var comments = JSON.parse( request.responseText );
        for( var i = 0; i < comments.length; i++ ) {
          if( comments[i].company_id === id ) {
            this.comments.push( comments[i] );
          }
        }
        this.show();
      }
    }
    request.send( null );
  },

  show: function() {
    console.log( this.comments );
    this.clear();
    var commentMaker = new ElementMaker();
    commentMaker.make( 'comment-space', 'ul', 'commentDetails' );
    commentMaker.makeText( 'commentDetails', 'commentDetails', 'Enter Comments', 'h4' );

    commentMaker.makeListItem(  'commentDetails', 'author', 'Author...'  );
    commentMaker.makeListItem( 'commentDetails', 'text', 'Comment...' );

    var elementGetter = new ElementGetter();
    var text = elementGetter.getElement( 'text' );
    text.type = 'textarea';

    var commentSpace = document.getElementById( 'comment-space' );

    var submitButton = document.createElement( 'img' );
    submitButton.id = 'submit';
    submitButton.src = '../css/images/tick.png';
    submitButton.onclick = function() {
      this.gatherInfo( this.id );
    }.bind( this )

    commentSpace.appendChild( submitButton );

    this.showComments();
  },

  showComments: function() {
    // this.clear();
    var elementGetter = new ElementGetter();
    for( var i = 0; i < this.comments.length; i++ ) {
      var elementMaker = new ElementMaker( );
      elementMaker.make( 'comment-space', 'ul', this.comments[i].id );
      var comment = elementGetter.getElement( this.comments[i].id );
      comment.onclick = function( e ) {
        this.showComment( e.target.parentNode.id );
      }.bind( this );
      var commentAuthor = elementMaker.makeHeavyList( this.comments[i].author, this.comments[i].id );
      var commentText = elementMaker.makeList( this.comments[i].text, this.comments[i].id );
      var br = document.createElement('br');
      var brSpace = document.getElementById( 'comment-space' );
      brSpace.appendChild( br );
    }

  },

  clear: function() {
    var clearAll = new Clear();
    clearAll.wipe();
    var clear = new Clear( 'comment-space' );
    clear.wipe();
    clear.hide();
  },

  gatherInfo: function() {
    var elementGetter = new ElementGetter();

    var author = elementGetter.getElementValue( 'author' );
    var text = elementGetter.getElementValue( 'text' );

    if(( !author ) || ( !text )) {
      this.displayWarning( author, text );
      return;
    }
    this.addCommentToDB( author, text, this.id );
  },

  addCommentToDB: function( author, text, id ) {

    var request = new XMLHttpRequest();
    request.open( 'POST', this.commentUrl);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
      if( request.status === 201 ) {
        var comments = JSON.parse( request.responseText )
        this.getComments( id );
      }
    }
    var data = {
      comment: {
        author: author, 
        text: text, 
        company_id: id
      }
    }
    request.send( JSON.stringify( data ));
  },

  showComment: function( id ) {
    for( var i = 0; i < this.comments.length; i++ ) {
      if( this.comments[i].id === parseInt( id )) {
        var detailCommentView = new DetailCommentView( this.comments[i] );
      }
    }
  },

  displayWarning: function( author, text ) {
    var warnSpace = document.getElementById( "warn-space" );
    warnSpace.id = "warn-space";
    warnSpace.innerText = "";
    if( !author ) {
      var authorWarning = document.createElement( "p" );
      authorWarning.innerText = "Please add an author";
      warnSpace.appendChild( authorWarning );
    }
    if( !text ) {
      var textWarning = document.createElement( "p" );
      textWarning.innerText = "Please add a comment";
      warnSpace.appendChild( textWarning );
    }
  }
}

module.exports = CommentView;