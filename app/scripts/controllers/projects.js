App.ProjectsIndexController = Ember.ArrayController.extend({
  queryParams: ['page'],
  page: 1,
  previousPage: function() {
    return this.get('page') - 1;
  }.property('page'),
  hasPreviousPage: function() {
    return this.get('page') > 1;
  }.property('page'),
  nextPage: function() {
    return this.get('page') + 1;
  }.property('page'),
  hasNextPage: function() {
    return this.get('page') < this.get('lastPage');
  }.property('page', 'lastPage'),
  hasMultiplePages: function() {
    return this.get('lastPage') > 1;
  }.property('lastPage'),
  availablePages: function() {
    var pages = [];
    for (var i = 1, lastPage = this.get('lastPage'); i <= lastPage; i++) {
      pages.push(i);
    }
    return pages;
  }.property('lastPage')
});

App.ProjectController = Ember.ObjectController.extend({
  background: function() {
    var screenshots = this.getWithDefault('model.screenshots', []);
    if (screenshots.length) {
      return 'background-image: url(' + screenshots[0] + ')';
    }
  }.property('model.screenshots')
});
