App.ApplicationSerializer = DS.RESTSerializer.extend({
  // add type key to payload
  normalizePayload: function(type, payload) {
    var normalizedPayload = {};
    normalizedPayload[type.typeKey] = payload;
    return normalizedPayload;
  },
  // payload exists within payload.objects if requesting multiple objects
  extract: function(store, type, payload, id, requestType) {
    this.extractMeta(store, type, payload);

    if (!id && payload.objects) {
      payload = payload.objects;
    }

    var specificExtract = "extract" + requestType.charAt(0).toUpperCase() + requestType.substr(1);

    return this[specificExtract](store, type, payload, id, requestType);
  },
  // extract pagination info from payload.pages
  extractMeta: function(store, type, payload) {
    if (payload && payload.pages) {
      store.metaForType(type, {pages: payload.pages});
      delete payload.pages;
    }
  },
  // CfA API is snake_case
  keyForAttribute: function(attr) {
    return Ember.String.decamelize(attr);
  }
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://codeforamerica.org',
  serializer: App.ApplicationSerializer.create(),
  // only specify organization if requesting a collection of objects
  buildURL: function(type, id) {
    var url = [],
        host = this.get('host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }
    if (id) {
      url.push(id);
    } else {
      url.unshift('organizations/Code-for-Boston');
    }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    return url;
  }
});

App.Store = DS.Store.extend({
  adapter: App.ApplicationAdapter
});
