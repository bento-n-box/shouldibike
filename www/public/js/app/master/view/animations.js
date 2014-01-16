define('master/view/animations', [
  'jquery',
  'underscore',
  'backbone',
  'snapsvg'
], function($, _, Backbone, snapsvg) {

  'use strict';

  return Backbone.View.extend({

    events: {
    },

    el: '#wrapper',


    /**
     * initialize()
     */
    initialize: function(options) {

      var view = this;

      _.bindAll(this);

      view.render();

      console.log('Backbone : Global : AnimationsView : Initialized');
    },


    /**
     * render()
     */
    render: function() {
      
      var view = this;

    }

  });
});
