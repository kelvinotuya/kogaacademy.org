$(document).ready(function () {
      $('.carousel.carousel-slider').carousel({ fullWidth: true });
      $('.button-collapse').sideNav();
      $('.modal').modal();
      $('.slider').slider();
});

// Vanilla JS version
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, options);
//   });
