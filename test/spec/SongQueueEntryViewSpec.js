
describe('SongQueueEntryView', function() {
  
  beforeEach(function() {
    playSpy = sinon.spy(SongQueueCollection.prototype, 'playFirst');
    songData1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title: 'test song'
    };
    songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title: 'test song 2'
    };
  });

  describe('when a song is clicked', function() {
    it('removes it from the queue', function() {
      var songQueue = new SongQueueCollection([songData1, songData1]);
      var songModel = songQueue.at(0);
      var songQueueEntryView = new SongQueueEntryView({model: songModel});
      $(songQueueEntryView.$el).trigger('click');
      expect(songQueue.length).to.equal(1);
    });
  });


}); 
