import DS from 'ember-data';

export default DS.Model.extend({
	tableNumber: DS.attr('number'),
	total: DS.attr('string'),
	orderItems: DS.hasMany('orderItems')
});
