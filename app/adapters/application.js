import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
	host: "http://crabmans-crabshack-api.herokuapp.com",
	namespace: "api",
	pathForType: function(type){
		return Ember.String.decamelize(type);
	},

	defaultSerializer: 'MenuSerializer',
});
