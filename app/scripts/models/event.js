App.Event = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  startTime: DS.attr('date'),
  url: DS.attr(),
  featured: DS.attr()
});