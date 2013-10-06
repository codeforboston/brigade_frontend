Ember.Handlebars.helper("join", function(value, options) {
   return value.join(options.hash.delimiter);
});