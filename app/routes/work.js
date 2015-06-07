import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var works = this.modelFor('works');
    return works.findBy('work_id', params.work_id);
  }

});
