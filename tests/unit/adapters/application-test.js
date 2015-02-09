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
test('it exists', function() {
    ok(adapter);
});

test('Returns the unpluralised version of the type', function(){
	ok(adapter.pathForType('Menu') === 'menu');
});