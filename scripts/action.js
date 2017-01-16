var projects = [];

function Article (info) {
  this.problemDomain = info.problemDomain;
  this.body = info.body;
  this.title = info.title;
  this.timeFrame = info.timeFrame;
}
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('.problem-body').html(this.problemDomain);
  $newArticle.find('.solution-body').html(this.body);
  $newArticle.find('h2').text(this.title);
  $newArticle.find('.timeFrame').html(this.timeFrame);

  $newArticle.removeClass('template');
  return $newArticle;
};

projectArticles.forEach(function(ele) {
  projects.push(new Article(ele));
});
projects.forEach(function(article) {
  $('#projects').append(article.toHtml());
});

function navView () {
  $('.core-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    $('#'+$(this).attr('data-content')).fadeIn();
  });
  $('.core-nav .tab:first').click();
}

navView();
