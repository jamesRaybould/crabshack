import {
    moduleForModel,
    test
}
from 'ember-qunit';

moduleForModel('order-item', {
    // Specify the other units that are required for this test.
    needs: ['model:table']
});

test('it exists', function(assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
});
