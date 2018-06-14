var top1 = $('#home').offset().top;
var top2 = $('#services').offset().top;
var top3 = $('#company').offset().top;
var top4 = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#change').css('background-color', '#4056A1');
  } else if (scrollPos >= top2 && scrollPos <top3) {
    $('#change').css('background-color', '#F13C20');
  } else if (scrollPos >= top3 && scrollPos <top4) {
    $('#change').css('background-color', '#14A76C');
  }else if (scrollPos >= top4) {
    $('#change').css('background-color', '#17252A');
  }
});