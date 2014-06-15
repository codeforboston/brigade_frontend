App.IndexRoute = Ember.Route.extend(App.ResetScroll, {
  setupController: function(controller) {
    var store = this.get('store');
    // store.find('project', {featured: true});
    // store.find('event', {featured: true});
    controller.set('featuredProjects', this.get('store').findAll('project'));
    controller.set('featuredEvents', this.get('store').findAll('event'));
  }
});
