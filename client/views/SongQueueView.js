// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  // events: {
  //   'dequeue': 'playNextSong'
  // },

  initialize: function() {
    this.collection.on('add', function () {
      // debugger;
      if(this.collection.length === 1) {
        this.collection.playFirst();
      }
    }, this);
    this.collection.on('dequeue', function (collection) {
      console.log("SongQueueView heard the call to remove.");
      this.collection.dequeueSong();
      this.collection.playFirst();
    }, this);
  },

  render: function() {

  },
  playNextSong: function () {
    console.log("Tell songqueue to play first.");
    this.model.playFirst();
  }


});
