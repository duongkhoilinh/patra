$(document).ready(function () {
  var count = 0;
  $('.main-bxslider').bxSlider();

  $('.testimonials-bxSlider').bxSlider();


  $('#menu').slicknav({prependTo: '#main-menu'});

  $(window).resize(function () {
    if ($(this).width() > 1199) {
      $(".logo").css({"top": "0"});
    } else {
      if ($('.slicknav_btn').hasClass('activeMenu')) {
        $(".logo").css({"top": "0"});
      }
      else {
        $(".logo").css({"top": "-54px"});
      }
    }
  });

  $(".slicknav_btn").click(function () {
    count++;
    if (count % 2 != 0) {
      $(this).addClass('activeMenu');
      $(".slicknav_menu").css({"background-color": "#1ba2db"});
      $(".slicknav_btn").css({"background-color": "#1ba2db"});
      $(".logo").css({"top": "0"});
      $(".slicknav_icon-bar").css({"background-color": "#ffffff"});
      $(".contact-mobile .phone-mobile").hide();
      $(".contact-mobile ul").show();
    }
    else {
      $(this).removeClass('activeMenu');
      $(".logo").css({"top": "-54px"});
      $(".slicknav_menu").css({"background-color": "#ffffff"});
      $(".slicknav_btn").css({"background-color": "#ffffff"});
      $(".slicknav_icon-bar").css({"background-color": "#000000"});
      $(".contact-mobile .phone-mobile").show();
      $(".contact-mobile ul").hide();
    }
  })
});