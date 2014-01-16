define('master/model/weather', [
	'config',
	'jquery',
	'underscore',
	'backbone',
	'router'
	], function(config, $, _, Backbone, AppRouter, LocationView){
		'use strict';

		return Backbone.Model.extend({

			url: 'http://api.worldweatheronline.com/free/v1/weather.ashx',

		

			initialize: function(){
				console.log('Backbone : Global : Weather View : Initialized');
			}

		});
});