import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('main',  { path: '/'});
  this.resource('tut2', { path: 'tut2'});
  this.route('works');
});

export default Router;
