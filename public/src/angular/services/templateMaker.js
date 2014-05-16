app.factory("TemplateService", function($http) {
  return {
    getTemplate: function(slug) {
      return $http.get("/" + slug + ".html");
    }
  }
});
