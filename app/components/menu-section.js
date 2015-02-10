import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		order:function(item){
			this.sendAction('order', item);
		}
	}
});
