Blogger.PostRoute = Ember.Route.extend({
  model: function(params) {
    return post.findBy('id', params.post_id);
  }
});
