
//refactored on day 2
//structure influenced by lab on day 2

var portfolioPieces = [];
function Article (info) {
  this.title = info.title;
  this.problemDomain = info.problemDomain;
  this.body = info.body;
  this.timeFrame = info.timeFrame;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);

//get the different dom elements
$newArticle.find("#showCase")
$newArticle.find()
$newArticle.find()
$newArticle.find()
$newArticle.find()

rticle.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('address a').attr('href', this.client);
  $newArticle.find('a').text(this.author);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('h2').text(this.client);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  $newArticle.removeClass('template');
  return $newArticle;

//render logic- taken from lab day2
blogArticles.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

blogArticles.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
