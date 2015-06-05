import Ember from 'ember';

var Work = Ember.Object.extend({
  name: '',
  year: '',
  description:'',
  image:''
});

var poetics = Work.create({
  name: 'Poetics',
  year: '2013',
  description:'Lorem Ipsum Poetics',
  image:'assets/images/poetics_iphone.png'
});

var tse = Work.create({
  name: 'TSE',
  year: '2012',
  description:'Lorem Ipsum TSE',
  image:'assets/images/tse_mac.png'
});


var works = [poetics, tse];

export default Ember.Route.extend({
  model: function() {
    return works;
  }
});
