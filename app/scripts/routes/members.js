App.MembersIndexRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.get('store').findAll('member');
  }
});

App.MembersShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('member', params.member_id);
  }
});
