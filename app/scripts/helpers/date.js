Ember.Handlebars.registerBoundHelper('date', function(date, format) {
  return moment(date).format(format);
});


Ember.Handlebars.registerBoundHelper('timeAgo', function(date) {
  return moment(date).fromNow();
});
