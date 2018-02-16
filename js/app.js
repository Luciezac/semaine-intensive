jQuery(document).ready(function($) {
  sliderHome();
  burgerMenu();
  chatBox();
});

var sliderHome = function() {
  $('.carousel-newCollection').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    draggable: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
}

var burgerMenu = function() {
  // Open nav
  $('.open-navMobile').on('click', function() {
    $('nav').addClass('openNav');
    $('nav').animate({
        left: "0px"
    }, 400);
    $('body').css('opacity', '0.7');
  });

  // Close nav
  $('.close-navMobile').on('click', function() {
    $('nav').animate({
        left: "100%"
    }, 400);
    setTimeout(function(){ 
      $('nav').removeClass('openNav');
    }, 400);
    $('body').css('opacity', '1');
  });

  // Open item
  $('nav .item p').on('click', function() {
    $(this).next().toggleClass('openCategory');
  });
}


var chatBox = function() {
  $('.chat-box .head-chat p').on('click', function() {
    $('.chat-box').animate({
        bottom: "0px"
    }, 400);
    $('.chat-box .close').removeClass('none');
  });

  $('.chat-box .close').on('click', function() {
    $('.chat-box').animate({
        bottom: "-310px"
    }, 400);
    $('.chat-box .close').addClass('none');
  });
}