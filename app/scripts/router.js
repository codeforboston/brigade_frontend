App.Router.map(function() {
  this.route('about');
  this.resource('projects', function() {
    this.route('show', {path: '/:project_id'});
  });
  this.resource('events', function() {
    this.route('show', {path: '/:event_id'});
  });
  this.resource('members', function() {
    this.route('show', {path: '/:member_id'});
  });
});