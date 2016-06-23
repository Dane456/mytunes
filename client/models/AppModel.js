// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueueCollection());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      console.log('hellllo');
      console.log('sqc',this.get('songQueueCollection'));
      console.log('sq BEFORE', this.get('songQueue'));
      console.log('the song to add: ', song);
      console.log('this is this: ', this);

      this.get('songQueue').add(song); //add to songQueueCollection...still not playing...fix in collection?
      console.log('sq AFTER', this.get('songQueue')); // appears to be adding!
      this.get('songQueue').playFirst();
      console.log(this.get('songQueue').at(0));
    }, this);
  }

});
