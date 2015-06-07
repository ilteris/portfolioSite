import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
      this.route('works', { path: '/'});
      this.route('work',  { path: '/:work_id'});

});

export default Router;
