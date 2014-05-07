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
  commitCount: function () {
    var details = this.getWithDefault('githubDetails', {});
    var participation = details.participation;
    var sum = 0;
    if (participation == null) {
      return sum
    }
    else {
      for (i=0;i<participation.length;i++)
        {sum = sum + participation[i]
      };
    }; 
    return sum
}.property('githubDetails'),
  background: function() {
    if (this.getWithDefault('screenshots', []).length) {
      return 'background-image: url(' + this.get('screenshots')[0] + ')'
    }
  }.property('screenshots')
});
