'use strict';

var projects = [];

function newProj (opts) {
  for (var key in opts) {
    this[key] = opts[key];
  }
};

Article.prototype.toHtml = function() {
  var source = $('#work').html();
  var context = projectArticles;
  var templateRender = Handlebars.compile(source);
  return templateRender();
};

projectArticles.forEach(function(fish){
  projects.push(new NewProj((fish));
});

projects.forEach(function(NewProj){
  $('#work').append(NewProj).toHtml();
});
