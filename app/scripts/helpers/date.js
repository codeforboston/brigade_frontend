Ember.Handlebars.registerBoundHelper('date', function(date, format) {
  return moment(date).format(format);
});


Ember.Handlebars.registerBoundHelper('timeAgo', function(date) {
  var mDate = moment(date),
      timeEl = '<time datetime="' + mDate.format() + '" title="' +
                mDate.format('LLL') + '">' + mDate.fromNow() + '</time>';
  return new Handlebars.SafeString(timeEl);
});
