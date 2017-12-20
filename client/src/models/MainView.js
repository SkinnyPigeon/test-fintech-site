var MainView = function() {
  this.show();
}

MainView.prototype = {
  show: function() {
    console.log( "Hello" );
  }
}

module.exports = MainView;