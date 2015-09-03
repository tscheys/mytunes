// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    //console.log("Play me.");
    this.trigger('play', this);
  },
  ended: function () {
    console.log("Telling the queue to play the next song.");
    this.trigger('dequeue', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function () {
    this.trigger('dequeue', this);
  }


});
