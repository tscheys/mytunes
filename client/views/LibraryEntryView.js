// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button type="button"></button></td>'),

  //we need an even that is on XXXX, model.enqueue
  events: {
    'click td button': function() {
      this.model.enqueue();
    },
    'click td'       : function() {
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
