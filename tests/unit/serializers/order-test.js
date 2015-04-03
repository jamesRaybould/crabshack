import {
	moduleFor,
	test
} from 'ember-qunit';

var serializer;
var result;

moduleFor('serializer:order', 'OrderSerializer', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  setup:function(){
  	serializer =this.subject();
  }
});

test('it exists', function(assert) {
	assert.ok(serializer);
});