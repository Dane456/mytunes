// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueueCollection = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      console.log('addTriggered');
      if (this.length === 1) {
        this.playFirst();        
      }
    }, this);

    this.on('ended', function() {
      console.log('ended');
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      console.log('dequeue');
      this.remove(song);
    }, this);
  },

  playFirst: function() { 
    console.log('playFirst');
    this.models[0].play();
    //play song at top of queue
  },

});