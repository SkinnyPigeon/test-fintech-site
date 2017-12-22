var ElementMaker = require( '../models/ElementMaker.js' );
var ElementGetter = require( '../models/ElementGetter.js' );

var NavView = function() {
  this.show();
}

NavView.prototype = {
  show: function() {
    var elementGetter = new ElementGetter();
    var elementMaker = new ElementMaker();

    var titleSpace = elementGetter.getElement( 'title-space' );
    var logo = document.createElement( 'img' );
    logo.id = 'logo';
    logo.src = './css/images/logo.png';
    titleSpace.appendChild( logo );

    var navSpace = elementGetter.getElement( 'nav-space' );
    var navList = document.createElement( 'ul' );
    navList.id = 'navList';

    var home = document.createElement( 'img' );
    home.id = 'home';
    home.src = './css/images/home.png';
    navList.appendChild( home );

    var list = document.createElement( 'img' );
    list.id = 'list';
    list.src = './css/images/list.png';
    navList.appendChild( list );

    var add = document.createElement( 'img' );
    add.id = 'add';
    add.src = './css/images/add.png';
    navList.appendChild( add );

    navSpace.appendChild( navList );
  }
}

module.exports = NavView;