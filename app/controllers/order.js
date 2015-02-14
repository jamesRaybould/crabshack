import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		order:function(){
			var orderItems = this.get('model');
			var order = this.store.createRecord('order', {tableNumber: 1});
			order.get('orderItems').addObjects(orderItems);
			order.save().then(function(){
			
			}, function(){
				//Ignore the error
			});
		},
		
		clearAll:function(){
			this.clear();
		}
	},

	subTotal: function(){
		return this.get("model").reduce(function(previousValue, item){
			var price = Number(item.get("price"));
			return previousValue + price;
		},0).toFixed(2);
	}.property('@each.price'),

	hasItems: function(){
		return this.get('model').length > 0;
	}.property('@each.item')
});
