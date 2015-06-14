// controller work.js
import Ember from "ember";

export default Ember.Controller.extend({

  currentElement: function () {
    //get the currentElement from actions
   // and return here when it's called
    //and by default return the first object

    return this.get('model.firstObject');
  }.property('model.[]'),

  actions: {
    loadRight: function (currentElement) {
      console.log(currentElement);

      this.transitionToRoute('works.work', currentElement.get('id'));
    }

  }});
