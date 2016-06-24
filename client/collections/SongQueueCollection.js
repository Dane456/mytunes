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
    }, this);

    this.on('removeSong', function(song) {
      console.log('removeSong collection triggered');
      this.remove(song);
      this.playFirst(); 
    }, this);
  },

  playFirst: function() { 
    if (this.length) {
      this.at(0).play(); 
    }        
    
  },

});