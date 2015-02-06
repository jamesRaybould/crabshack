import Ember from 'ember';

export default Ember.Component.extend({
	click: function(evt){
			var target = $(evt.currentTarget);
			
			target.find(".description").toggle("hidden");

		}
});
