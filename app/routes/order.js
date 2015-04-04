import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller, model);
		this.store.find('table',1).then(
			function(data){
				controller.set('orderedItems', data);
			});
	},
	model: function(){
		return [];
	},
});
