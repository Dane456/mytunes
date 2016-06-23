// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    /*this.$el.on('ended', function() {
      //need to dequeue the song 
      this.dequeue();
    });*/
  },
  
  events: {
    'ended': 'songEnded'     // when we receive 'ended', run method songEnded
  },

  songEnded: function() {    
    this.model.ended();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
