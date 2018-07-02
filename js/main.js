jQuery(document).ready(function($) {
  // init sidenav
  $(".button-collapse").sideNav();
  // init scrollspy
  $(".scrollspy").scrollSpy();

  // scrollfire rules
  const options = [
    // showcase fadeIn
    {
      selector: ".main-text",
      offset: 0,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    // navbar transparent
    {
      selector: ".navbar-fixed",
      offset: 1200,
      callback: function(el) {
        $("nav")
          .removeClass("transparent")
          .addClass("blue-grey darken-3");
      }
    }
  ];

  //   init scrollfire
  Materialize.scrollFire(options);  
  
});
