import Ember from 'ember';

export default Ember.ArrayController.extend({

	setupController: function(controller, model) {
		// controller.set('model', model);
	},

	actions: {
		order:function(){
			var orderItems = this.get('model');
			var order = this.store.createRecord('order', {tableNumber: 1});
			order.get('orderItems').addObjects(orderItems);
			var _this = this;
			order.save().then(
				function(success){
					_this.set('model', []);					
				}, function(err){
					console.log(err);

				});
		},
		
		clearAll:function(){
			this.clear();
		}
	},

	orderedItemsArray: function(){
		return this.store.createRecord('order');
	},

	subTotal: function(){
		return this.get("model").reduce(function(previousValue, item){
			var price = Number(item.get("price"));
			return previousValue + price;
		},0).toFixed(2);
	}.property('@each.price'),

	hasItems: function(){
		return this.get('model').length > 0;
	}.property('@each.item'),

	// hasOrderedItems: function(){
	// 	return this.ordered.get("orderItems").length > 0;
	// }.property('@each.order'),

	orderedItems: function(){
		this.store.find('table',1).then(function(success){

			
		});
	}.property('orderedItems')
});
