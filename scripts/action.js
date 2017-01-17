'use strict';

var projects = [];

function newProj (opts) {
  for (var key in opts) {
    this[key] = opts[key];
  }
};

Article.prototype.toHtml = function() {
  var source = $('#portfolio-template').html(this);
  var context = projectArticles;
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

projectArticles.forEach(function(fish){
  projects.push(new NewProj(fish));
});

projects.forEach(function(ourNewProjectObject){
  $('#work').append(ourNewProjectObject.toHtml(this));
});
