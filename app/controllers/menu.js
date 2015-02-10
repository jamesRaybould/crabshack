import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['order'],
	actions: {
		order: function(item){
			//Is there a better way that jumping across *into* another controller??
			this.get('controllers.order').pushObject(item);
			// this.sendAction('controllers.order')
		}
	},

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
