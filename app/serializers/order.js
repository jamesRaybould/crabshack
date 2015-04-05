import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

	attrs: {
		orderItems: {deserialize : 'records'}
	},

	extract: function(store, type, payload, id, requestType) {
		payload.tableNumber = id;
		payload.id = id;
		var order = {order:payload};
		return this._super(store, type, order, id, requestType);
	},

	serializeIntoHash: function(data, type, record, options) {
		Ember.merge(data, this.serialize(record, options));
	},

});