// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  events: {
    'dequeue': 'playNextSong'
  },

  initialize: function() {
  },

  render: function() {

  },
  playNextSong: function () {
    console.log("Tell songqueue to play first.");
    this.model.playFirst();
  }


});
