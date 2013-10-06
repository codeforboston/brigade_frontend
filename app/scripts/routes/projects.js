App.ProjectsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').findAll('project');
  }
});

App.ProjectsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('project', params.project_id);
  }
});