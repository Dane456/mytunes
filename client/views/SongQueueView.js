// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('remove', function() {
      this.render();
    }, this);
    this.render(); //render to start
  },

  render: function() {
    // look at detach documentation
    this.$el.children().detach();
    
    this.$el.html('<th>Queue Songs below here</th>').append(       // !fix
          this.collection.map( function(song) {
            return new SongQueueEntryView({model: song}).render();
          })
        );
  },

});
