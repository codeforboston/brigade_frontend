App.Project = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  repository: DS.attr(),
  history: DS.attr(),
  url: DS.attr(),
  projectMembers: DS.hasMany('project-member', {async: true}),
  status: DS.attr(),
  skillsNeeded: DS.attr(),
  screenshots: DS.attr(),
  pressClippings: DS.attr(),
  featured: DS.attr()
});