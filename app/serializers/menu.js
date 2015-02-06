import DS from 'ember-data';
// import _ from 'lodash';

export default DS.RESTSerializer.extend({
	extract: function(store, type, payload, id, requestType){
		var menuItems = [];

		var keys = Object.keys(payload);

		for(var i = 0; i < keys.length; i++){
			var menuItem = payload[keys[i]];
			menuItem.id = i;
			menuItem.name = keys[i];
			menuItems.push(menuItem);
		}				
		
		return menuItems;
	}
});
