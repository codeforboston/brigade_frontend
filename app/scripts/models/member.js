// TODO When API supports members, use this instead
// App.Member = DS.Model.extend({
//   name: DS.attr(),
//   githubProfile: DS.attr(),
//   email: DS.attr(),
//   projectMemberships: DS.hasMany('project-member', {async: true}),
//   avatar: function() {
//     var hash = this.get('email') ? MD5(this.get('email')) : '';
//     return "http://www.gravatar.com/avatar/" + hash;
//   }.property('email')
// });
App.Member = Ember.Object.extend({
  name: function() { return this.get('login'); }.property('login'),
  githubProfile: function() { return this.get('htmlUrl') }.property('htmlUrl'),
  avatar: function() { return this.get('avatarUrl') }.property('avatarUrl')
});
