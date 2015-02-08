import DS from 'ember-data';
//The data coming back from the API is a list of objects,
//this converts it into an array so that Ember can use it
export default DS.RESTSerializer.extend({
	extract: function(store, type, payload){
		var menuItems = [];
		//The keys are the names of the menu items
		var keys = Object.keys(payload);

		//Grab each item from the payload and push it into our 
		//array with the correct name and an ID based on where it is in the list
		for(var i = 0; i < keys.length; i++){
			var menuItem = payload[keys[i]];
			menuItem.id = i+1;
			menuItem.name = keys[i];
			menuItems.push(menuItem);
		}				
		
		return menuItems;
	}
});
