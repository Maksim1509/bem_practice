/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable linebreak-style */
import $ from 'jquery';
import slick from 'slick-carousel';

$('document').ready(
  () => $('.button[filter="wd"]').click(
    () => {
      if ($('.button[filter="wd"]').attr('val') === 'off') {
        $('.button[filter]').attr('val', 'off');
        $('.button[filter]').removeClass('focused');
        $('.button[filter="wd"]').addClass('focused');
        $('.button[filter="wd"]').attr('val', 'on');
        $('.services-types img').hide(300);
        $('img[filter="wd"]').show(300);
      }
    },
  ),
);
$('document').ready(
  () => $('.button[filter="ud"]').click(
    () => {
      if ($('.button[filter="ud"]').attr('val') === 'off') {
        $('.button[filter]').attr('val', 'off');
        $('.button[filter]').removeClass('focused');
        $('.button[filter="ud"]').addClass('focused');
        $('.button[filter="ud"]').attr('val', 'on');
        $('.portfolio-items img').hide(300);
        $('img[filter="ud"]').show(300);
      }
    },
  ),
);
$('document').ready(
  () => $('.button[filter="moc"]').click(
    () => {
      if ($('.button[filter="moc"]').attr('val') === 'off') {
        $('.button[filter]').attr('val', 'off');
        $('.button[filter="moc"]').attr('val', 'on');
        $('.button[filter]').removeClass('focused');
        $('.button[filter="moc"]').addClass('focused');
        $('.portfolio-items img').hide(300);
        $('img[filter="moc"]').show(300);
      }
    },
  ),
);

$('document').ready(
  () => $('.button[filter="all"]').click(
    () => {
      $('.button[filter]').attr('val', 'off');
      $('.button[filter="all"]').attr('val', 'on');
      $('.button[filter]').removeClass('focused');
      $('.button[filter="all"]').addClass('focused');
      $('.portfolio-items div img').show(300);
    },
  ),
);
$('document').ready(
  () => $('.button[filter="view-all"]').click(
    () => {
      $('.button[filter]').attr('val', 'off');
      $('.button[filter="view-all"]').attr('val', 'on');
      $('.button[filter]').removeClass('focused');
      $('.button[filter="view-all"]').addClass('focused');
      $('.portfolio-items div img').show(300);
    },
  ),
);

$('document').ready(
  () => $('.team').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: 'dots-style',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      }],
  }),
);

$('document').ready(() => {
  $('li.menu__item a[href^="#"]').click(function () {
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top,
    }, 500);
    return false;
  });
});

$(document).ready(() => {
  $(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
      $('#toTop').fadeIn();
    } else $('#toTop').fadeOut();
  });
  $('#toTop').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 800);
  });
  $('.menu-icon').click(function () {
    $('nav').slideToggle(500);
    $('ul.menu').css({
      'flex-direction': 'column',
    });
    if ($('.menu-icon').html() === '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="far fa-window-close"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }
  });
});
