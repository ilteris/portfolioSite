// controller work.js
import Ember from "ember";

export default Ember.Controller.extend({
  firstElement: function () {
    return this.get('model.firstObject'); // or this.get('model.firstObject');
  }.property('model.[]')



});
