App.EventsIndexRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.get('store').findAll('event');
  }
});

App.EventsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('event', params.event_id);
  }
});
