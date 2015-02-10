import DS from 'ember-data';

export default DS.Model.extend({
  tableNumber: DS.attr('number'),
  orderItems: DS.hasMany('menu')
});
