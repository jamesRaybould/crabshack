import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

    attrs: {
        orderItems: {
            deserialize: 'records'
        }
    },

    extract: function(store, type, payload, id, requestType) {
        var orderItems = [];

        payload.orderItems.forEach(function(item) {

            var orderItem = orderItems.find(function(orderItem) {
                return orderItem.id === item.id;
            });

            if (orderItem !== undefined) {
                orderItem.number++;
            } else {
                item.number = 1;
                orderItems.push(item);
            }
        });

        var table = {
            id: id,
            orderItems: orderItems,
            total: payload.total,
            tableNumber: id
        };

        return this._super(store, type, {
            table: table
        }, id, requestType);
    },

    serializeIntoHash: function(data, type, record, options) {
        Ember.merge(data, this.serialize(record, options));
    },
});
