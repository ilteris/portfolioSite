import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route("works", { path: '/'}, function() {
      this.route('work',  { path: '/:work_id'}, function() {
        this.route('detail', { path: '/detail'})
      });
  });
});

export default Router;
