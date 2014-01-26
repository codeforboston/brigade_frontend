App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    var store = this.get('store');
    store.find('project', {featured: true});
    store.find('event', {featured: true});
    controller.set('featuredProjects', store.filter('project', function(project) {
      return project.get('featured');
    }));
    controller.set('featuredEvents', store.filter('event', function(event) {
      return event.get('featured');
    }));
  }
});