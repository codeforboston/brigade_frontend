App.Router.map(function() {
  this.route('about');
  this.resource('projects', function() {
    this.resource('project', {path: '/:project_id'});
  });
  this.resource('members', function() {
    this.resource('member', {path: '/:member_id'});
  });
  this.resource('events', function() {
    this.resource('event', {path: '/:event_id'});
  });
  this.route('connect');
  this.route('resources');
});
