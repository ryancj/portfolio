$(function() {

  $('.scrollspy').scrollSpy(); //Scrolling effect

  $(".button-collapse").sideNav(); //Side Nav for mobile

  $('.materialboxed').materialbox(); //Image effect

  $('.modal-trigger').leanModal(); //Initialize modals

  window.sr = ScrollReveal({ reset: true });

  sr.reveal('.tech-logo', { duration: 1500, distance: '20px' }, 50);
  sr.reveal('.fade', { duration: 1500, distance:'10px', scale: 1 });

});

var options = [{ selector:".whoosh", offset: 500, callback: function(){
  Materialize.showStaggeredList(".whoosh");
}}];
Materialize.scrollFire(options);

{selector: '#staggered-test', offset: 400, callback: function() {
  Materialize.showStaggeredList("#staggered-test");
} },
