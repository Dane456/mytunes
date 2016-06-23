// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    artist: '?',
    url: '?',
    title: ''
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('SongModelEnqueue');
    //console.log('SongModelEnqueueThis:' + JSON.stringify(this));
    this.trigger('enqueue', this);
  },

  dequeue: function () {
    console.log('SongModelDequeue');
    //console.log('SongModelDequeueThis:' + JSON.stringify(this));
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
