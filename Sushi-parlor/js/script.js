$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__nav, .header__ul-mobile').toggleClass('active_nav');
    $('body').toggleClass('lock');
  });
});