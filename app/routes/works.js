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
  name: 'Poetics',
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



var WorksCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['year'],
  sortAscending: false,
  content: []
 });


var works = WorksCollection.create();

works.pushObjects([poetics, tse]);


export default Ember.Route.extend({
  model: function() {
    return works;
  }
});
