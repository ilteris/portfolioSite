import Ember from "ember";
var Velocity = Ember.$.Velocity;

export default function fade() {
  return Velocity.animate(
    this.oldElement,
    { opacity: 0 },
    { duration: 100 }
  ).then(() => {
      return Velocity.animate(
        this.newElement,
        {opacity: [ 1, 0] },
        { duration: 100, visibility: 'visible' }
      );
    });
}
