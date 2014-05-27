Brigade Front-End [![Build Status](https://travis-ci.org/codeforboston/brigade_frontend.svg?branch=master)](https://travis-ci.org/codeforboston/brigade_frontend)
=================

This is the front-end for the [Code for Boston](http://www.codeforboston.org/) Brigade website, running on [Ember.js](http://emberjs.com), [Bootstrap](http://getbootstrap.com/) and [Compass](http://compass-style.org/)/[Sass](http://sass-lang.com/).


Installation
------------

[brigade_frontend](https://github.com/codeforboston/brigade_frontend) is built using [Yeoman](http://yeoman.io/) and [generator-ember](https://github.com/yeoman/generator-ember). These tools allow for faster and easier development, testing, and deployment; developers must install these tools to work with the website. ([More information on why we use Yeoman](http://yeoman.io/whyyeoman.html).)

Full installation instructions can be found within the [installation guide](https://github.com/codeforboston/brigade_frontend/wiki/Installation), though here are the quick steps:

    npm install -g yo
    gem install compass
    cd brigade_frontend
    npm install
    bower install


Development
-----------

Once you've [installed the dependencies](https://github.com/codeforboston/brigade_frontend/wiki/Installation), you can run the website locally via `grunt serve`.


Code for America API
--------------------

We make use of the [Code for America API](https://github.com/codeforamerica/cfapi). This allows us to display information about projects, events, and (at some point in the future) members. For development purposes, however, we stub out the API using [Ember.js fixtures](http://emberjs.com/guides/models/the-fixture-adapter/).
