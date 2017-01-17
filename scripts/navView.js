'use strict';

navView();
Article.navView = function() {
  $('.core-nav').on('click', '.tab', function() {
    var $dataContent = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $dataContent + '.tab-content').fadeIn();
  });
  $('.core-nav .tab:first').click();
};


Article.navView();
