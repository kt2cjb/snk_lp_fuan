$(window).scroll(function(){
  if($(this).scrollTop() > 500) {
    $('.j-fixed-button').addClass('on');
  } else {
    $('.j-fixed-button').removeClass('on');
  }
});
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});