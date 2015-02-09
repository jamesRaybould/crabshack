import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('menu-item', 'MenuItemComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('The default of isHidden is true', function(){
  var component = this.subject();

  // appends the component to the page
  this.append();

  ok(component.get("isHidden") === true);
});

test('the click event toggles isHidden', function(){
  var component = this.subject();

  // appends the component to the page
  this.append();

  Ember.run(function() {
    component.click();
  });

  ok(component.get("isHidden") === false);
});

test('two click events from the initial load of the component set isHidden to true', function(){
  var component = this.subject();

  // appends the component to the page
  this.append();

  Ember.run(function() {
    component.click();
    component.click();
  });

  ok(component.get("isHidden") === true);
});


