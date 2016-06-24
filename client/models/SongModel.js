// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    artist: '?',
    url: '?',
    title: '',
    playCount: 0
  },

  play: function() {
    var playCount = this.get('playCount');
    playCount++;
    this.set('playCount', playCount);
    console.log(this.get('playCount'));
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function () {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  removeSong: function() {
    console.log('model removeSong triggered');
    this.trigger('removeSong', this);
  }


});
