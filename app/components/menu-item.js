import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        order: function() {
            this.sendAction('order', this.get("item"));
        }
    },
    click: function(evt) {
        if (evt.target.nodeName !== "BUTTON") {
            this.toggleProperty("isHidden");
        }
    },
    //Default out the `isHidden` value to true so we *don't* show the description by default
    isHidden: function() {
        return true;
    }.property()
});
