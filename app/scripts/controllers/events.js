App.EventsIndexController = Ember.ArrayController.extend({
  sortProperties: ['startTime', 'name'],
  upcoming: function() {
    var now = new Date();
    return this.filter(function(event) {
      return moment(event.get('startTime')).isAfter(now);
    });
  }.property('startTime'),
});
