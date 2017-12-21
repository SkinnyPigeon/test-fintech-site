var DetailView = function( company ) {
  this.company = company;

  this.show();
}

DetailView.prototype = {
  show: function() {
    console.log( this.company );
  }
}

module.exports = DetailView;