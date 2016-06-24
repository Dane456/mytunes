// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  initialize: function() {
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      console.log('SongQueueEntryView clicked triggered');
      this.model.removeSong();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
