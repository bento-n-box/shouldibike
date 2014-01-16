// get user location
// user enters location
// Grab weather data // Or is weather data cached? 
// Show weather and road conditions for commute.
// Search again or change query

define('master/app', [
  'config',
  'jquery',
  'underscore',
  'backbone',
  'router',
  'master/view/location',
  'master/view/form',
  'master/view/weather',
  'master/view/animations',
  //'helpers/console',
  //'helpers/events',
  //'helpers/analytics',
], function(config, $, _, Backbone, AppRouter, LocationView, FormView, WeatherView, AnimationsView) {

  'use strict';

  var App = {

    config: config,

    cache: {
      routers: {},
      models: {},
      collections: {},
      views: {}
    },


    /**
     * initialize()
     *
     * Initialize Application. Responsible for instantiating Backbone router and starting Backbone history.
     */
    initialize: function() {
      App.cache.views.formView = new FormView();
      App.cache.routers.appRouter = new AppRouter();
      App.cache.views.locationView = new LocationView();
      App.cache.views.weatherView = new WeatherView();
      App.cache.views.animationsView = new AnimationsView();
      
      Backbone.history.start();

      console.log('App : Initialized');


      this.bindCustomEvents();
      window.App = App;
      return App; // do not use "this" in a static context
    },

    /**
     * bindCustomEvents()
     *
     * Use this function to bind tracking against any custom event triggered against the app.events dispatch.
     */
    bindCustomEvents: function(){
      console.log('bind');

      Backbone.resize = _.extend({}, Backbone.Events);
      
      var throttleResize = _.throttle(
        function(){
          Backbone.resize.trigger('windowResized');
        }, 500 );
       // fires when window is being resized
      $(window).on( 'resize', throttleResize );

    }
  };

  return App;

});
