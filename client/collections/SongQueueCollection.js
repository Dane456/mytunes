// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueueCollection = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();        
      } else {
        return;
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      } else {
        return;
      }
    }, this);

    this.on('dequeue', function(song) {
      this.shift();
      //this.playFirst(); //play when we remove? ....doesn't work
    }, this);

    this.on('removeSong', function(song) {
      this.remove(song);
      this.playFirst(); // error: playing when removing last song (fixed with if statement on line 36)
    }, this);
  },

  playFirst: function() { 
    if (this.length) {
      this.at(0).play(); 
    }                   // trying at instead of this.models[0]
    //play song at top of queue
  },

});