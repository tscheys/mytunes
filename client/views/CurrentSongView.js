// SongQueueView.js - Defines a backbone view class for the song queue.
var CurrentSongView = Backbone.View.extend({

  tagName: "table",
  className: "table table-striped table-hover",



  template: _.template('<tr><td class="col-md-2">(<%= artist %>)</td><td class="col-md-2"><%= title %></td><td class="col-md-2"></td><td class="col-md-2"></td></tr>'),

  setSong: function(song){
    this.model = song;
    this.render();
  },
  render: function(){
    return this.$el.html('<th>Current Song</th>').append(this.template(this.model.attributes));
  }


});
