Ember.Handlebars.registerBoundHelper('date', function(date, format) {
  return moment(date).format(format);
});