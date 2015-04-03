import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
	serializeIntoHash: function(data, type, record, options) {
		Ember.merge(data, this.serialize(record, options));
	}
});