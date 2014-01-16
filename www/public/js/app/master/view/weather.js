define('master/view/weather', [
  'jquery',
  'underscore',
  'backbone',  
  'master/model/weather'
], function($, _, Backbone, WeatherModel) {

  'use strict';

  return Backbone.View.extend({

    events: {
      "submit form": "onSubmit"
    },

    el: '#wrapper',

    defaults: { //http://api.worldweatheronline.com/free/v1/weather.ashx?q=London&format=json&num_of_days=5&key=p857haaz3chr9vbrunu7nxsk
        q: '80026',
        format: 'JSON',
        num_of_days: '2',
        date: '',
        fx: '',
        cc: '',
    
    
        callback: 'dataReturned',
        yourmomsnumber: 'p857haaz3chr9vbrunu7nxsk'
    },

    model: WeatherModel,

    initialize: function(options) {
      _.bindAll(this);
      var view = this;
      
      view.render();
      
      console.log('Backbone : Global : WeatherView : Initialized');
    },

    render: function(){
       this.model = new this.model();
    },

  //  template: _.template('<form> <input type="text" value="<%= location %>" /><button>search</button></form>'),

    onSubmit: function(event){
      console.log('get weather');
      event.preventDefault() 
      var attrs = this.serialize();
      console.log(attrs)
 
     
      this.model.fetch(this.defaults);

    },
    serialize: function() {
      return {
        startpoint1: $("input[name='startpoint1']").val(),
        startpoint2: $("input[name='startpoint1']").val(),
        // time1:
        // time2:
        tolerence: 5
      };
    },
    dataReturned: function(data){

      console.log('finished');
    }

  });
});
