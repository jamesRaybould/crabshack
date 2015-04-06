import DS from 'ember-data';

export default DS.Model.extend({
    state: DS.attr('string'),
    number: DS.attr('number'),
    table: DS.belongsTo('table')
});
