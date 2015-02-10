import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		order:function(){
			var orderItems = this.get('model');
			var order = this.store.createRecord('order', {tableNumber: 1});
			order.get('orderItems').addObjects(orderItems);
			order.save();
		}
	},
});
