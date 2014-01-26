App.Project = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  repository: DS.attr(),
  history: DS.attr(),
  url: DS.attr(),
  projectMembers: DS.hasMany('project-member', {async: true}),
  status: DS.attr(),
  skillsNeeded: DS.attr(),
  projectPlan: DS.attr(),
  screenshots: DS.attr(),
  pressClippings: DS.attr(),
  featured: DS.attr(),
  githubDetails: DS.attr(),

  background: function() {
    if (this.getWithDefault('screenshots', []).length) {
      return 'background-image: url(' + this.get('screenshots')[0] + ')'
    }
  }.property('screenshots')
});
