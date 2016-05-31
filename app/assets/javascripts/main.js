$(function() {

  $('.scrollspy').scrollSpy(); //Scrolling effect

  $(".button-collapse").sideNav(); //Side Nav for mobile

  $('.materialboxed').materialbox(); //Image effect

  $('.modal-trigger').leanModal(); //Initialize modals

  $('.parallax').parallax(); //Initialize parallax

  window.sr = ScrollReveal({ reset: true }); //Initialize ScrollReveal

  sr.reveal('.tech-logo', { duration: 1100, distance: '20px', viewFactor: 0.5 }, 40);
  sr.reveal('.stag-list', { duration: 1000, distance:'20px', scale: 1 }, 100);
  sr.reveal('.photo-fade', { duration: 800, distance:'20px', scale: 1 }, 40);
  sr.reveal('.fade', { duration: 700, distance:'20px', scale: 1 });
$('ul.tabs').tabs('select_tab', 'tab_id');
});
