import Ember from 'ember';

export default Ember.ArrayController.extend({

    needs: "table",
    table: Ember.computed.alias("controllers.table"),

    actions: {
        order: function() {
            var orderItems = this.get('model');
            var order = this.store.createRecord('order', {
                tableNumber: 1
            });
            order.get('orderItems').addObjects(orderItems);
            var _this = this;
            order.save().then(
                function() {
                    _this.set('model', []);
                    //trigger what I can only describe as a horrfically inefficient fetch of
                    // the updated table information from the remote API
                    _this.store.fetchById('table', 1);
                });
        },

        clearAll: function() {
            this.clear();
        }
    },

    subTotal: function() {
        return this.get("model").reduce(function(previousValue, item) {
            var price = Number(item.get("price"));
            return previousValue + price;
        }, 0).toFixed(2);
    }.property('@each.price'),

    hasItems: function() {
        return this.get('model').length > 0;
    }.property('@each.item'),

    hasOrderedItems: function() {
        return this.get("orderedItems").get('orderItems').length > 0;
    }.property('@each.order'),
});
