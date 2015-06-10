import Ember from 'ember';

var Work = Ember.Object.extend({
  name: '',
  year: '',
  description:'',
  image:'',
  logo:'',

  work_id: function() {
    return this.get('name').dasherize();
  }.property('name'),




});

var poetics = Work.create({
  name: 'POETICS',
  year: '2013',
  description:'Lorem Ipsum Poetics',
  image:'assets/images/poetics_iphone.png',
  logo:'assets/images/poetics_logo.png'
});

var tse = Work.create({
  name: 'TSE',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/tse_mac.png',
  logo:'assets/images/tse_logo.png'
});

var minibook = Work.create({
  name: 'MINIBOOK',
  year: '2014',
  description:'MiniBook is an iphone app that explores storytelling in its own format. The format',
  image:'assets/images/minibook_iphone.png',
  logo:'assets/images/minibook_logo.png'
});

var wemontage = Work.create({
  name: 'WEMONTAGE',
  year: '2013',
  description:'Lorem Ipsum TSE',
  image:'assets/images/wemontage_logo.png',
  logo:'assets/images/wemontage_mac.png'
});


var sferra = Work.create({
  name: 'SFERRA',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/sferra_iphone.png',
  logo:'assets/images/sferra_logo.png'
});



var smc = Work.create({
  name: 'SEEING MORE COLORS',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/smc_iphone.png',
  logo:'assets/images/SEEING_logo.png'
});


var oneworld = Work.create({
  name: 'ONEWORLD',
  year: '2011',
  description:'Lorem Ipsum TSE',
  image:'assets/images/oneworld_ipad.png',
  logo:'assets/images/%7Boneworld%7D_logo.png'
});


var redfish = Work.create({
  name: 'SEEING MORE COLORS',
  year: '2010',
  description:'Lorem Ipsum TSE',
  image:'assets/images/redfish_ipad.png',
  logo:'assets/images/RedFish_logo.png'
});


var moet = Work.create({
  name: 'MOET BUBBLES',
  year: '2008',
  description:'Lorem Ipsum Moet',
  image:'assets/images/moet_mac.png',
  logo:'assets/images/moet1280_logo.png'
});


var remy = Work.create({
  name: 'REMY MARTIN GAME NIGHTS',
  year: '2007',
  description:'Lorem Ipsum TSE',
  image:'assets/images/remy_mac.png',
  logo:'assets/images/remymartin_logo.png'
});


var whotels = Work.create({
  name: 'W HOTELS HOBOKEN',
  year: '2006',
  description:'Lorem Ipsum TSE',
  image:'assets/images/w_mac.png',
  logo:'assets/images/whotels_logo.png'
});






var WorksCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['year'],
  sortAscending: false,
  content: []
 });


var works = WorksCollection.create();

works.pushObjects([poetics, tse, minibook, sferra, oneworld, smc, redfish, remy, moet, whotels]);


export default Ember.Route.extend({
  model: function() {
    return works;
  }
});
