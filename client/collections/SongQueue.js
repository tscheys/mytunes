// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  playFirst: function() {
    this.first().play();
  },
  dequeueSong : function () {
    this.remove(this.first());
  }

});

    // console.log(this.length);
    // console.log(this);
    // debugger;
    // this.remove(this.model[0]).bind(this);
    // console.log(this.length);
    // console.log(this.first());