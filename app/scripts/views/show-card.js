App.ShowCardView = Ember.View.extend({
  tagName: 'a',
  attributeBindings: ['href'],
  href: '',
  click: function(e) {
    e.preventDefault();
    var $btn = $(e.currentTarget),
        $card = $btn.closest('.card-flip');
        $card.find('.card-front, .card-back').toggleClass('hide');
  }
});

// FIXME this doesn't work- still trying to figure out best practices for click handling/DOM modification in Ember
App.ShowCard2View = Ember.View.extend({
  // tagName: 'a',
  // attributeBindings: ['href'],
  // href: '',
  // click: function(e) {
  //   e.preventDefault();
  //   var $btn = $(e.currentTarget),
  //       $card = $btn.closest('.card-flip');
  //       $card.find('.card-front, .card-back').toggleClass('hide');
  // }
  actions: {
    toggleCard: function() {
      console.log(arguments);
    }
  }
});
