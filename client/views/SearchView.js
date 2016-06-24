var SearchView = Backbone.View.extend({

  tagName: 'form',

  initialize: function() {
    this.render();
    
  },
  render: function() {
    this.$el.html('<div><input type="text" class="input"><button type="button" class="inputButton">search</button></div>');
  },

  events: {
    'click .inputButton': function() {

      var searchVal = this.$el.find('input').val();
      // send 'search' trigger to appview or somewhere else
      this.trigger('search', searchVal);
    }
  }

});
