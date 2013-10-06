App.ProjectMember = DS.Model.extend({
  member: DS.belongsTo('member'),
  project: DS.belongsTo('project'),
  role: DS.attr()
});