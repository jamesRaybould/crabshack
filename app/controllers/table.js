import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        var _this = this;
        setInterval(function() {
            _this.store.fetchById('table', 1);
        }, 30000);
    },
    hasItems: function() {

        if (this.get("model").get('orderItems') != undefined) {
            return this.get("model").get('orderItems').length > 0;
        };
        return false;
    }.property('model.@each.orderItem'),
});
