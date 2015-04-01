import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('order', 'Order', {
  // Specify the other units that are required for this test.
  needs: ['model:menu']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
