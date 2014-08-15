App.Project = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  codeUrl: DS.attr(),
  history: DS.attr(),
  linkUrl: DS.attr(),
  // TODO use relationship when available in API
  // projectMembers: DS.hasMany('project-member', {async: true}),
  status: DS.attr(),
  skillsNeeded: DS.attr(),
  projectPlan: DS.attr(),
  screenshots: DS.attr(),
  pressClippings: DS.attr(),
  featured: DS.attr(),
  githubDetails: DS.attr(),
  commitCount: function () {
    var participation = this.get('githubDetails.participation');
    var count = 0;
    if (participation) {
      for (var i = 0; i < participation.length; i++) {
        count += participation[i];
      }
    }
    return count;
  }.property('githubDetails'),

  // TODO use relationship when available in API
  projectMembers: function() {
    var self = this;
    return this.getWithDefault('githubDetails.contributors', []).map(function(item, i, enumerable) {
      return Ember.Object.create({project: self, member: App.Member.create(item)});
    });
  }.property('githubDetails.contributors')
});
