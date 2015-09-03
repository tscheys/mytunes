// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="col-md-2"><%= artist %></td><td class="col-md-2"><%= title %></td>\
                        <td class="col-md-2"><span class="glyphicon glyphicon-play" aria-hidden="true"></span>\
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span></td>\
                        <td class="col-md-2"><%= playCount %></td>'),

  //we need an even that is on XXXX, model.enqueue
  events: {
    'click span.glyphicon-plus': function() {
      //debugger;
      this.model.enqueue();
    },
    'click span.glyphicon-play'   : function() {
      //debugger;
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
