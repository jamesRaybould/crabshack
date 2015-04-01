import {
	moduleFor,
	test
} from 'ember-qunit';

var serializer;
var result;

moduleFor('serializer:menu', 'MenuSerializer', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
  setup:function(){
  	serializer =this.subject();
  	result = serializer.extract(null, null, payload);
  }
});

//Fixture data
var payload = {
	"menuItem1": 
	{price: "10.00", description: "A tasty test dish", type: "test"},
	"menuItem2": 
	{price: "10.00", description: "A tasty test dish", type: "test"}
	
};

test('it exists', function(assert) {
	assert.ok(serializer);
});

test('When given an object list it returns an array',function(assert){
	assert.ok(result instanceof Array);
});

test('It returns both test objects with an ID attached', function(assert){
	var item = result[0];
	assert.ok(item.id !== undefined || item.id !== null);
});

test('The ID of the first item is "menuItem1"', function(assert){
	var item = result[0];
	assert.ok(item.id === "menuItem1");
});

test('The name of the first item is correctly set', function(assert){
	var item = result[0];
	assert.ok(item.name === "menuItem1");
});

test('Number of items in the array is the same as the number of items in the object list', function(assert){
	assert.ok(Object.keys(payload).length === result.length);
});
