/**
 * @module config
 */

'use strict';

requirejs.config({

  // Disable timeout for scripts.
  waitSeconds: 0,

  baseUrl: 'js/app',

  paths: {
    // Core Libraries
    jquery:    '../lib/jquery-1.10.2.min', // http://api.jquery.com/
    underscore:    '../lib/lodash',            // http://lodash.com/
    backbone:  '../lib/backbone-min',      // http://backbonejs.org/,
    "backbone.localStorage" : "../lib/backbone.localStorage-min",                        //https://github.com/jeromegn/Backbone.localStorage/

    // Backbone Submodule Directories
    router:     'router',
    model:      'model',
    collection: 'collection',
    view:       'view',
    template:   'template',

    // Helper Modules
    helpers: '../helpers',

    // 3rd party
    imagesloaded: '../lib/imagesloaded',
    dropkick: '../lib/dropkick-min',
    snapsvg: '../plugins/snap.svg-min'

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
    underscore: {
      exports: '_'
    },

    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    "backbone.localStorage": {
      "deps": ["backbone"],
      "exports": "Backbone.localStorage"
    },

    imagesloaded: {
      deps: ['jquery'],
      exports: 'imagesloaded'
    },
    dropkick: {
      deps: ['jquery'],
      exports: 'dropkick'
    }
      
  }
});
