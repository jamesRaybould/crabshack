import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('menu', 'Menu', {
  // Specify the other units that are required for this test.
  needs: ['model:order']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
