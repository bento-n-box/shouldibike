define('master/view/form', [
  'jquery',
  'underscore',
  'backbone',
  'dropkick'
], function($, _, Backbone, dropkick) {

  'use strict';

  return Backbone.View.extend({

    events: {
    },

    el: '#wrapper',

    initialize: function(options) {

      var view = this;

      _.bindAll(this);
      $('#firstCommute').dropkick({
        theme : 'black'
      });

      console.log('Backbone : Global : FormView : Initialized');
    },


    render: function() {


    }

  });
});
