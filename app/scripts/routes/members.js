App.MembersIndexRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.get('store').findAll('member');
  }
});
