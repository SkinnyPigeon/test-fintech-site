var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var DetailView = function( company ) {
  this.company = company;

  this.show();
}

DetailView.prototype = {
  show: function() {
    var basicMaker = new ElementMaker( 'detail-space', 'ul', 'companyBasicDetails' );
    basicMaker.makeList( this.company.name, 'companyBasicDetails' );
    basicMaker.makeList( this.company.phone, 'companyBasicDetails');
    basicMaker.makeList( this.company.email, 'companyBasicDetails' );

    var addressMaker = new ElementMaker( 'detail-space', 'ul', 'companyAddress' );
    addressMaker.makeList( this.company.address_line_1, 'companyAddress' );
    addressMaker.makeList( this.company.address_line_2, 'companyAddress' );
    addressMaker.makeList( this.company.address_city, 'companyAddress' );
    addressMaker.makeList( this.company.address_region, 'companyAddress' );
    addressMaker.makeList( this.company.address_postcode, 'companyAddress' );

    var detailMaker = new ElementMaker( 'detail-space', 'ul', 'companyDetails' );
    detailMaker.makeList( this.company.type_of_work, 'companyDetails' );
    detailMaker.makeList( this.company.tech_used, 'companyDetails' );
    detailMaker.makeList( this.company.past_work, 'companyDetails' );
    detailMaker.makeList( this.company.preferred_work, 'companyDetails' );


    console.log( this.company );
  }
}

module.exports = DetailView;
