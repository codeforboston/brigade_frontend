App.ProjectsIndexRoute = Ember.Route.extend(App.ResetScroll, {
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.get('store').findQuery('project', params);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    var pages = this.get('store').metadataFor('project').pages;
    if (pages) {
      var prevPage = pages.prev && parseInt(pages.prev.slice(-1)),
          nextPage = pages.next && parseInt(pages.next.slice(-1)),
          currentPage = (nextPage && nextPage - 1) || (prevPage && prevPage + 1) || 1,
          lastPage = (pages.last && parseInt(pages.last.slice(-1))) || currentPage;
      controller.set('lastPage', lastPage);
    }
  }
});

App.ProjectsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('project', params.project_id);
  },
  actions: {
    shareOnTwitter: function() {
      var url = encodeURIComponent(window.location.href),
          via = 'CodeForBoston',
          text = encodeURIComponent(document.title + ' - ' + this.controller.get('name')),
          width = 550, height = 420;
      window.open('https://twitter.com/share?url=' + url + '&via=' + via + '&text=' + text,
                  'Share a link on Twitter',
                  'width=' + width + ',height=' + height + ',left=' + (screen.width - width) / 2 + ',top=' + (screen.height - height) / 2);
    }
  }
});
