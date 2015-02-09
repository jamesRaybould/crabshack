import Ember from 'ember';

export default Ember.Component.extend({
	click: function(){
		this.set("isHidden", !this.get("isHidden"));
	},
	//Default out the `isHidden` value to true so we *don't* show the description by default
	isHidden: function(){
		return true;
	}.property()
});
