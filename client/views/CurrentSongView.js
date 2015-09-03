// SongQueueView.js - Defines a backbone view class for the song queue.
var CurrentSongView = Backbone.View.extend({

  tagName: "table",



  template: _.template('<tr><td>(<%= artist %>)</td><td><%= title %></td></tr>'),

  setSong: function(song){
    this.model = song;
    this.render();
  },
  render: function(){
    return this.$el.html('<th>Current Song</th>').append(this.template(this.model.attributes));
  }


});
