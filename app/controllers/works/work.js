// controller work.js
import Ember from "ember";

export default Ember.Controller.extend({

  currentElement: function () {
    //get the currentElement from actions
    // and return here when it's called
    //and by default return the first object
    console.log(this.get('model'));
    return this.get('model.firstObject');
  }.property('model.[]')
});
