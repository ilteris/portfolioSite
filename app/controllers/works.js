// controller work.js
import Ember from "ember";

export default Ember.Controller.extend({
  firstElement: function () {
    return this.get('model.firstObject');
  }.property('model.[]'),

  selectedElement: null,

  currentElement: function () {
    return (this.get('selectedElement') || this.get('firstElement'));
  }.property('firstElement', 'selectedElement'),

  actions: {
    loadRight: function (selection) {
      console.log(selection);
      this.set('selectedElement', selection);
      this.transitionToRoute('works', selection);
      return false; // or something transition logic
    }
  }
});
