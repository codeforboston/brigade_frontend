App.Event = DS.Model.extend({
  eventUrl: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  name: DS.attr(),
  organizationName: DS.attr(),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  organization: DS.attr()
});
