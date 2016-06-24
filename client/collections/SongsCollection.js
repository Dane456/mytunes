// Songs.js - Defines a backbone collection class for songs.
var SongsCollection = Backbone.Collection.extend({

  model: SongModel, 

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
   
    this.fetch();
  }


});
    /*$.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      headers: {
        'X-Parse-Application-Id': 'OWawBR069jvFwWln4zrgOJR2wOCN6oetbBdvMLJq',
        'X-Parse-REST-API-Key': 'GH78f2KLgWQT16v2OtQjI0WJZXBd7czwegMoIogB'
      },
      type: 'GET',
      success: function(data) {
        var results = data.results;
        // console.log('songdata', this.songData);
        // console.log('results',results);
        return results;
        // console.log('got something');
      },
      error: function(data) {
        console.error('parse: Failed to send message', data);
      }
    });*/