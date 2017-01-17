
'use strict';
var navView = {};
navView.handleMainNav = function() {
  $('.core-nav').on('click', '.tab', function() {
    var $dataContent = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $dataContent + '.tab-content').fadeIn();
  });
  $('.core-nav .tab:first').click();
};
navView.handleMainNav();
