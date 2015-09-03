// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td class="col-md-2">(<%= artist %>)</td><td class="col-md-2"><%= title %></td><td class="col-md-2"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></td><td class="col-md-2"></td>'),

  
  events: {
    'click span.glyphicon-minus': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
