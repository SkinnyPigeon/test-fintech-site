var ElementMaker = require( './ElementMaker.js' );

var NewView = function() {
  this.show();
}

NewView.prototype = {
  show: function() {
    console.log( "hello" );
    var name = new ElementMaker( 'new-space', 'input', 'name', 'Name...' );
    var phone = new ElementMaker( 'new-space', 'input', 'phone', 'Phone...' );
    var email = new ElementMaker( 'new-space', 'input', 'email', 'Email...' );
    var addressLine1 = new ElementMaker( 'new-space', 'input', 'addressLine1', 'Address Line 1...' );
    var addressLine2 = new ElementMaker( 'new-space', 'input', 'addressLine2', 'Address Line 2...' );
    var addressCity = new ElementMaker( 'new-space', 'input', 'addressCity', 'City...' );
    var addressRegion = new ElementMaker( 'new-space', 'input', 'addressRegion', 'Region...' );
    var addressPostCode = new ElementMaker( 'new-space', 'input', 'addressPostCode', 'Post Code...' );
    var lastContact = new ElementMaker( 'new-space', 'input', 'lastContact', 'Last Contact (YYYY-MM_DD )...' );
    var pastWork = new ElementMaker( 'new-space', 'input', 'pastWork', 'Previous Work...' );
    var techUsed = new ElementMaker( 'new-space', 'input', 'techUsed', 'Tech Used...' );
    var typeOfWork = new ElementMaker( 'new-space', 'input', 'typeOfWork', 'Type of work undetaken...' );
    var preferredWork = new ElementMaker( 'new-space', 'input', 'preferredWork', 'Preferred Work...' );
    var haveWeMet = new ElementMaker( 'new-space', 'input', 'haveWeMet', 'Have we met?', 'checkbox' );
  },
}

module.exports = NewView;