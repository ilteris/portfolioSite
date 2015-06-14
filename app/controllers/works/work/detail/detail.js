// controller work.js
import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    loadRight: function (model) {
      console.log(model);
      this.transitionToRoute('works.work', model);
    }
  }

});
