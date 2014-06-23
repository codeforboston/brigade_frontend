App.ActiveIndicatorView = Ember.View.extend({
  tagName: 'li',
  classNameBindings: ['isActive:active'],

  isActive: function() {
    return this.get('childViews.firstObject.active');
  }.property('childViews.firstObject.active')
});
