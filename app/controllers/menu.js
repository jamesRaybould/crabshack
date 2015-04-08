import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['order'],
    actions: {
        order: function(item) {
            //Push the menu item into a type of orderItem for sending
            // var orderItem = this.store.createRecord('orderItem', {id: item.id, name: item.get("name"), price: item.get("price")});
            //Is there a better way that jumping across *into* another controller??
            this.get('controllers.order').pushObject(item);
        }
    },

    starters: function() {
        return this.get('model').filterBy('type', "starter");
    }.property(),

    mains: function() {
        return this.get('model').filterBy('type', "main");
    }.property(),

    desserts: function() {
        return this.get('model').filterBy('type', "dessert");
    }.property(),

    beverages: function() {
        return this.get('model').filterBy('type', "beverage");
    }.property()

});
