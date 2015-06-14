// controller work.js
import Ember from "ember";

export default Ember.Controller.extend({
  firstElement: function () {
    return this.get('model.firstObject'); // or this.get('model.firstObject');
  }.property('model.[]'),

  actions: {
    loadRight: function(model){
      console.log(this.get('model'));
      //this.transitionToRoute('works.work', model.get('work_id')+1);
    }
  }

});
