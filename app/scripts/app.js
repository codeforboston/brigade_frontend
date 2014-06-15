require('libs/*');

// var x = require('libs/md5');

var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/mixins/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/store-@@env');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/helpers/*');
require('scripts/router');
