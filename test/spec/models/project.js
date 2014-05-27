/*global describe, beforeEach, afterEach, it, expect */
'use strict';
(function () {
  describe('Project model', function () {
    var project;
    beforeEach(function() {
      var store = App.__container__.lookup('store:main');
      Ember.run(function() {
        project = store.createRecord('project', {
          githubDetails: {
            participation: [1, 2, 3, 4]
          }
        });
      });
    });

    it('has a commit count equal to the sum of the participation', function () {
      expect(project.get('commitCount')).to.equal(10);
    });

    afterEach(function() { App.reset(); });
  });
})();
