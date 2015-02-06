import Ember from 'ember';

export default Ember.ArrayController.extend({
	starters: function(){
		return this.get('model').filterBy("type", "starter");
	}.property(),

	mains: function(){
		return this.get('model').filterBy("type", "main");
	}.property(),

	desserts: function(){
		return this.get('model').filterBy("type", "dessert");
	}.property(),

	beverages: function(){
		return this.get('model').filterBy("type", "beverage");
	}.property()
});
