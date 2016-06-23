// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('change', function () {
      this.render();
    }, this);
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('remove', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderSong, this);
  },

  renderSong: function(song) {
    var song = new SongQueueEntryView({model: song});
    this.$el.append(song.render());
  }

});
