/**
 * Created by ilteris on 6/2/15.
 */
export default function() {

  var duration = 1500;

  this.transition(
    this.fromRoute('works'),
    this.toRoute('work'),
    this.use('toLeft'),
    this.reverse('toRight')

  );
}
