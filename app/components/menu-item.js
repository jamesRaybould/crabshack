import Ember from 'ember';

export default Ember.Component.extend({
	click: function(evt){
			this.set("isHidden", !this.get("isHidden"));
		},

		isHidden: function(){
			return true;
		}.property()
});
