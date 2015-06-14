import Ember from 'ember';

var Work = Ember.Object.extend({
  name: '',
  year: '',
  description:'',
  image:'',
  logo:'',
  id:''
});

var minibook = Work.create({
  id: 1,
  name: 'MINIBOOK',
  year: '2014',
  description:'MiniBook is an iphone app that explores storytelling in its own format. The format',
  image:'assets/images/minibook_iphone.png',
  logo:'assets/images/minibook_logo.png'
});

var poetics = Work.create({
  id: 2,
  name: 'POETICS',
  year: '2013',
  description:'Lorem Ipsum Poetics',
  image:'assets/images/poetics_iphone.png',
  logo:'assets/images/poetics_logo.png'
});

var tse = Work.create({
  id: 3,
  name: 'TSE',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/tse_mac.png',
  logo:'assets/images/tse_logo.png'
});


var smc = Work.create({
  id: 4,
  name: 'SEEING MORE COLORS',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/smc_iphone.png',
  logo:'assets/images/smc_logo.png'
});


var sferra = Work.create({
  id: 5,
  name: 'SFERRA',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/sferra_iphone.png',
  logo:'assets/images/sferra_logo.png'
});



var oneworld = Work.create({
  id: 6,
  name: 'ONEWORLD',
  year: '2011',
  description:'Lorem Ipsum TSE',
  image:'assets/images/oneworld_ipad.png',
  logo:'assets/images/oneworld_logo.png'
});


var redfish = Work.create({
  id: 7,
  name: 'REDFISH GAMES',
  year: '2010',
  description:'Lorem Ipsum TSE',
  image:'assets/images/redfish_ipad.png',
  logo:'assets/images/RedFish_logo.png'
});



var wemontage = Work.create({
  id: 8,
  name: 'WEMONTAGE',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/wemontage_mac.png',
  logo:'assets/images/wemontage_logo.png'
});


var remy = Work.create({
  id: 9,
  name: 'REMY MARTIN GAME NIGHTS',
  year: '2007',
  description:'Lorem Ipsum TSE',
  image:'assets/images/remy_mac.png',
  logo:'assets/images/remymartin_logo.png'
});


var moet = Work.create({
  id: 10,
  name: 'MOET BUBBLES',
  year: '2008',
  description:'Lorem Ipsum Moet',
  image:'assets/images/moet_mac.png',
  logo:'assets/images/moet1280_logo.png'
});



var whotels = Work.create({
  id: 11,
  name: 'W HOTELS HOBOKEN',
  year: '2006',
  description:'Lorem Ipsum TSE',
  image:'assets/images/w_mac.png',
  logo:'assets/images/whotels_logo.png'
});


var works = [minibook, poetics, tse, smc, sferra, oneworld, redfish, wemontage, remy, moet, whotels];
var ap = Ember.ArrayProxy.create({ content: Ember.A(works) });

export default Ember.Route.extend({
  model: function() {
    return works;
  }


});
