// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function () {
      this.trigger('songQueueRender', this);
    }, this);
  },

  playFirst: function() {
    this.first().play();  //passing a controller call through to a single song model.
  },
  dequeueSong : function () {
    this.remove(this.first());  //a controller told me to delete the first song in my collection.
    this.trigger('songQueueRender', this);
  }

});
