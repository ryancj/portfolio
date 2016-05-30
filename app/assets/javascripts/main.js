$(function() {

  $('.scrollspy').scrollSpy(); //Scrolling effect

  $(".button-collapse").sideNav(); //Side Nav for mobile

  $('.materialboxed').materialbox(); //Image effect

  $('.modal-trigger').leanModal(); //Initialize modals

  $('.parallax').parallax(); //Initialize parallax

  window.sr = ScrollReveal({ reset: true }); //Initialize ScrollReveal

  sr.reveal('.tech-logo', { duration: 1000, distance: '20px', viewFactor: 0.5 }, 45);
  sr.reveal('.fade', { duration: 700, distance:'20px', scale: 1 });
  sr.reveal('.stag-list', { duration: 700, origin: 'left', distance:'20px', scale: 1 }, 80);

});
