App.Adapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query, type) {
    return records.filter(function(record) {
      for (var key in query) {
        if (record[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }
});

App.Store = DS.Store.extend({
  adapter: App.Adapter
});