/**
 * Created by ilteris on 6/2/15.
 */
export default function() {

  var duration = 1500;

  this.transition(
    this.fromRoute('works'),
    this.toRoute('work'),
    this.use('toLeft', {
      matchBy: 'data-speaker-id',
      //use: ['webFlyTo', { duration } ]
    }, {
     // use: ['toLeft', { duration } ]
    }),
    this.reverse('toRight', {
      matchBy: 'data-speaker-id',
    //  use: ['webFlyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
    })
  );
}
