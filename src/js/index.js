/* eslint-disable linebreak-style */
import $ from 'jquery';


$('document').ready(
  () => $('.button[filter="wd"]').click(
    () => {
      if ($('.button[filter="wd"]').attr('val') === 'off') {
        $('.button[filter]').attr('val', 'off');
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
      $('.portfolio-items > img').show(300);
    },
  ),
);
