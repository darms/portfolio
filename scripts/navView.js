'use strict';
function navView () {
  $('.core-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
    $('#'+$(this).attr('data-content')).fadeIn();
  });
  $('.core-nav .tab:first').click();
}
navView();
