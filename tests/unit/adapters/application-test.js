import {
  moduleFor,
  test
} from 'ember-qunit';

var adapter;

moduleFor('adapter:application', 'ApplicationAdapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  setup:function(){
  	adapter = this.subject();
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
    assert.ok(adapter);
});

test('Returns the unpluralised version of the menu type', function(assert){
	assert.ok(adapter.pathForType('Menu') === 'menu');
});

test('Returns the pluralised version of any type other than menu', function(assert){
	assert.ok(adapter.pathForType('Order') === 'orders');
});