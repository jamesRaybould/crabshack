import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
	host: "http://crabmans-crabshack-api.herokuapp.com",
	namespace: "api",
	pathForType: function(type){
		var decamelizedType = Ember.String.decamelize(type);

		if (decamelizedType==='menu') {
			return decamelizedType;
		}

		return this._super(decamelizedType);

	},

	defaultSerializer: 'MenuSerializer',
});
