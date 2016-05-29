$(function() {

  $('.scrollspy').scrollSpy(); //Scrolling effect

  $(".button-collapse").sideNav(); //Side Nav for mobile

  $('.materialboxed').materialbox(); //Image effect

  $('.modal-trigger').leanModal(); //Initialize modals

  $('.parallax').parallax(); //Initialize parallax

  window.sr = ScrollReveal({ reset: true });

  sr.reveal('.tech-logo', { duration: 2000, distance: '20px' }, 50);
  sr.reveal('.fade', { duration: 1000, distance:'20px', scale: 1 });
  sr.reveal('.stag-list', { duration: 800, origin: 'left', distance:'20px', scale: 1 }, 100);

});
