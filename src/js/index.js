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
  }),
);

