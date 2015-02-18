jQuery(document).ready(function () {
  jQuery('.slide-logo').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  });
//  Remove html slick-prev, slick-next
  jQuery('.slick-prev').empty();
  jQuery('.slick-next').empty();

//Reset tab-landing
  jQuery('.desktop-version .sub-title').click(function () {
    jQuery('.desktop-version .tab-content .tab-content .tab-pane.active').removeClass("active");
    jQuery('.desktop-version .tab-content .tab-content .tab-landing').addClass("active");
    jQuery('.desktop-version .nav-stacked li').removeClass("active");
  });
  var count = 0;
  jQuery('.main-bxslider').bxSlider();
  jQuery('.portfolio-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 5,
    slideWidth: 178,
    slideMargin: 20
  });
  jQuery('.portfolio-bxslider-mobis ul').bxSlider();

  jQuery('.testimonials-bxSlider').bxSlider();

  jQuery('#menu').slicknav({prependTo: '#main-menu'});

  jQuery(window).resize(function () {
    if (jQuery(this).width() > 1199) {
      jQuery(".logo").css({"top": "0"});
      jQuery("body").removeClass('modal-open');
      jQuery('.modal').hide();
    } else {
      if (jQuery('.slicknav_btn').hasClass('activeMenu')) {
        jQuery(".logo").css({"top": "0"});
      }
      else {
        jQuery(".logo").css({"top": "-54px"});
      }
    }
  });

  jQuery(".slicknav_btn").click(function () {
    count++;
    if (count % 2 != 0) {
      jQuery(this).addClass('activeMenu');
      jQuery(".slicknav_menu").css({"background-color": "#1ba2db"});
      jQuery(".slicknav_btn").css({"background-color": "#1ba2db"});
      jQuery(".logo").css({"top": "0"});
      jQuery(".slicknav_icon-bar").css({"background-color": "#ffffff"});
      jQuery(".contact-mobile .phone-mobile").hide();
      jQuery(".contact-mobile ul").show();
    }
    else {
      jQuery(this).removeClass('activeMenu');
      jQuery(".logo").css({"top": "-54px"});
      jQuery(".slicknav_menu").css({"background-color": "#ffffff"});
      jQuery(".slicknav_btn").css({"background-color": "#ffffff"});
      jQuery(".slicknav_icon-bar").css({"background-color": "#000000"});
      jQuery(".contact-mobile .phone-mobile").show();
      jQuery(".contact-mobile ul").hide();
    }
  });


  tab(jQuery('.tab-click-service'), jQuery('.tab-pane-service'));
  openEnquire();
});

var tab = function (menuTab, contentTab) {

  menuTab.click(function () {
    menuTab.parent().removeClass('active');
    contentTab.hide().removeClass('active');
    var href = jQuery(this).data('tab');
    jQuery(this).parent().addClass('active');
    jQuery(href).show().addClass('active');
  });
};

var openEnquire = function () {

  var btn = jQuery('.enquire');
  var box = jQuery('.box-enquire');
  var cancel = jQuery('.box-enquire .btn-cancel');

  btn.click(function () {
    $(window).scrollTop(0);
    box.slideToggle();
  });
  cancel.click(function () {
    box.slideUp(200);
  });
};