var projects = [];

function newProj (opts) {
  for (key in opts) {
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
  projects.push(new Article(fish));
});

projects.forEach(function(ourNewProjectObject){
  $('#articles').append(ourNewProjectObject).toHtml();
});

Article.navView = function() {
  $('.core-nav').on('click', '.tab', function() {
    var $dataContent = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $dataContent + '.tab-content').fadeIn();
  });
  $('.core-nav .tab:first').click();
};



projectArticles.forEach(function(ele) {
  projects.push(new Article(ele));
});
projects.forEach(function(article) {
  $('#projects').append(article.toHtml());
});

Article.navView();
