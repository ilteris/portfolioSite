/**
 * Created by ilteris on 6/2/15.
 */
export default function(){
  this.transition(
    this.fromRoute('main'),
    this.toRoute('tut2'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
