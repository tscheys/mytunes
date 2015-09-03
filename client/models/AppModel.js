// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());  //the SongQueueView needs to listen to this.

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    //if the library yells 'enqueue' 
    params.library.on('enqueue', function(song){
      //call add on songqueue
      debugger;
      if(this.get('currentSong').url === undefined){
        this.set('currentSong', song);
      }else {
            this.get('songQueue').add(song);
      }
    }, this);

    params.library.on('play', function(song) {
      console.log("I got the message to play.");
      this.set('currentSong', song);
    }, this);

    params.library.on('dequeue', function () {
      debugger;
      console.log("SongQueueView heard the call to remove."  + this);
      var myQueue = this.get('songQueue');
      if(myQueue.length > 0){
        myQueue.playFirst();
        myQueue.dequeueSong();  
      } else {
        this.set('currentSong', new SongModel());
      }
  }, this);
  }

});
