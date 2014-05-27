/*global describe, beforeEach, afterEach, visit, it, expect */
'use strict';
(function () {
  describe('Navigation', function () {
    it('updates the active header when going from page to page', function () {
      visit('/projects').then(function() {
        expect(find('ul.navbar-nav li.active a').text()).to.equal('projects');
      });
    });

    afterEach(function() { App.reset(); });
  });
})();
