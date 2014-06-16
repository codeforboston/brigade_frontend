App.ProjectsIndexRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.get('store').findAll('project');
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
