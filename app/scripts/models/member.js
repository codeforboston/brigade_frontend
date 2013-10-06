App.Member = DS.Model.extend({
  name: DS.attr(),
  githubProfile: DS.attr(),
  email: DS.attr(),
  projectMemberships: DS.hasMany('project-member', {async: true}),
  gravatar: function() {
    var hash = this.get('email') ? MD5(this.get('email')) : '';
    return "http://www.gravatar.com/avatar/" + hash;
  }.property('email')
});