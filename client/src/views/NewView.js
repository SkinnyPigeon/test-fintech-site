var NewView = function() {
  this.show();
}

NewView.prototype = {
  show: function() {
    console.log( "hello" );
  },
}

module.exports = NewView;