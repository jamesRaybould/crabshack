import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("menu", {path: "/"}, function() {
    	this.resource("order", function() {});
	});
  this.resource('table', {path: "table/:tableid"});
});
