// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function () {
      // debugger;
      if(this.length === 1) {
        this.playFirst();
      }
      this.trigger('songQueueRender', this);
    }, this);
    this.on('dequeue', function (collection) {
      //debugger;
      console.log("SongQueueView heard the call to remove."  + this);
      this.dequeueSong();
      this.playFirst();
    }, this);
  },

  playFirst: function() {
    this.first().play();  //passing a controller call through to a single song model.
  },
  dequeueSong : function () {
    this.remove(this.first());  //a controller told me to delete the first song in my collection.
  }

});

    // console.log(this.length);
    // console.log(this);
    // debugger;
    // this.remove(this.model[0]).bind(this);
    // console.log(this.length);
    // console.log(this.first());