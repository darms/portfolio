'use strict';
var projects = [];

function NewProj (opts) {
  for (var key in opts) {
    this[key] = opts[key];
  }
}

NewProj.prototype.toHtml = function() {
  var source = $('#portfolio-template').html();
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
