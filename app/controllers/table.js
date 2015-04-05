import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        var _this = this;
        setInterval(function() {
            _this.store.fetchById('table', 1);
        }, 30000);
    }
});
