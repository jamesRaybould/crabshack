import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('table').set('model', this.store.find('table', 1));
    },
    model: function() {
        return [];
    },
    renderTemplate: function() {
        this._super();

        this.render('table', {
            into: 'order',
            outlet: 'table',
            controller: 'table'
        });
    }
});
