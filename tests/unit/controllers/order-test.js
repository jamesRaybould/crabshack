import {
    moduleFor,
    test
}
from 'ember-qunit';

moduleFor('controller:order', 'OrderController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
    needs: ['controller:table']
});

// Replace this with your real tests.
test('it exists', function(assert) {
    var controller = this.subject();
    assert.ok(controller);
});
