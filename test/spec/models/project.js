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
            participation: [1, 2, 3, 4],
            contributors: [
              {
                avatarUrl: "https://avatars.githubusercontent.com/u/12058?",
                contributions: 36,
                htmlUrl: "https://github.com/carpeliam",
                login: "carpeliam",
                owner: false,
                url: "https://api.github.com/users/carpeliam"
              },
              {
                avatarUrl: "https://avatars.githubusercontent.com/u/1397914?",
                contributions: 15,
                htmlUrl: "https://github.com/isaacchansky",
                login: "isaacchansky",
                owner: false,
                url: "https://api.github.com/users/isaacchansky"
              },
              {
                avatarUrl: "https://avatars.githubusercontent.com/u/3900295?",
                contributions: 5,
                htmlUrl: "https://github.com/teresa-murphy-skvorzova",
                login: "teresa-murphy-skvorzova",
                owner: false,
                url: "https://api.github.com/users/teresa-murphy-skvorzova"
              },
              {
                avatarUrl: "https://avatars.githubusercontent.com/u/2136286?",
                contributions: 2,
                htmlUrl: "https://github.com/thecristen",
                login: "thecristen",
                owner: false,
                url: "https://api.github.com/users/thecristen"
              }
            ]
          }
        });
      });
    });

    it('has a commit count equal to the sum of the participation', function () {
      expect(project.get('commitCount')).to.equal(10);
    });

    it('wraps the github contributors in a list of Members', function() {
      var contributors = project.get('projectMembers');
      expect(contributors.length).to.equal(4);
      var firstContributor = contributors[0].member;
      expect(firstContributor.get('name')).to.equal('carpeliam');
      expect(firstContributor.get('avatar')).to.equal('https://avatars.githubusercontent.com/u/12058?');
    });

    afterEach(function() { App.reset(); });
  });
})();
