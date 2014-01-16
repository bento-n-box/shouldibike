define('master/view/location', [
  'jquery',
  'underscore',
  'backbone',
  'master/collection/locations',
  'master/model/location'
], function($, _, Backbone, LocationCollection, LocationModel) {

  'use strict';

  return Backbone.View.extend({

    events: {
      "submit button": "getWeather"
    },

    el: '#locationForm',

    collection: LocationCollection,
    
   

    template: _.template($("#formTemplate").html()),

    initialize: function(options) {
      _.bindAll(this);
      var view = this;
      this.$form = this.$('#form');
      this.$input = this.$('#input');
      this.LocationModel = new LocationModel();
      this.autogeolocate = true;
    
      view.render();
      
      console.log('Backbone : Global : LocationView : Initialized');
    },
    
    render: function() {
      var view = this;
      view.geoLocation();
      
      var html = this.template(view.LocationModel.toJSON());
      this.$el.html(html);
    },

    geoLocation: function(){
      var view = this;
      if( navigator.geolocation && this.autogeolocate ){
        navigator.geolocation.getCurrentPosition(function(position) {
          view.latLong(position);
        });
      }
    },

    latLong: function(position){
      var latitude  = position.coords.latitude, 
          longitude = position.coords.longitude,
          latlong = latitude + ',' + longitude,
          view = this;
       
      if(!longitude ){return;}
      this.autogeolocate = false;
      this.LocationCollection = new LocationCollection();
     
      this.LocationCollection.fetch({
          data: {latlng: latlong},
          success: function(){
  
            var address = view.LocationCollection.toJSON()[0].results[0].address_components;
            var zipcode = address[address.length - 1].long_name;
            view.LocationModel.set({location: zipcode})
            view.render();
          }
      });
    }

  });
});
