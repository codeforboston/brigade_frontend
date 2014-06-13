App.ProjectsIndexController = Ember.ArrayController.extend({
  topList: function() {
    var len = this.get('length');
    return this.filter(function(item, index) {
      return index < len / 2;
    });
  }.property('length'),
  bottomList: function() {
    var len = this.get('length');
    return this.filter(function(item, index) {
      return index >= len / 2;
    });
  }.property('length')
});
