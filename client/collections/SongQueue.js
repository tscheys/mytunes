// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  playFirst: function() {
    this.firsst().play();
    console.log(this.length);
    this.remve(this.at(0));
    console.log(this.length);
    console.log(this.first());
  }

});