$(document).ready(function () {
  var count=0;
  $('.main-bxslider').bxSlider();
  $('.testimonials-bxSlider').bxSlider();
  $('#menu').slicknav({prependTo:'#main-menu'});
  $(".slicknav_btn").click(function(){
    count ++;
    console.log(count);
    if(count%2!=0) {
      $(".slicknav_menu").css({"background-color":"#1ba2db"});
      $(".slicknav_btn").css({"background-color":"#1ba2db"});
      $(".logo").css({"top":"0"});
      $(".slicknav_icon-bar").css({"background-color":"#ffffff"});
      $(".contact-mobile .phone-mobile").hide();
      $(".contact-mobile ul").show();
    }
    else {
      $(".logo").css({"top":"-54px"});
      $(".slicknav_menu").css({"background-color":"#ffffff"});
      $(".slicknav_btn").css({"background-color":"#ffffff"});
      $(".slicknav_icon-bar").css({"background-color":"#000000"});
      $(".contact-mobile .phone-mobile").show();
      $(".contact-mobile ul").hide();
    }
  })
});