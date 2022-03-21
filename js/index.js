(function ($) {

  "use strict";

    // HEADER
    $(window).on("scroll",function () {

      var bodyScroll = $(window).scrollTop(),
          navbar = $(".navbar");
  
      if(bodyScroll > 80){
  
          navbar.addClass("nav-scroll");
          $('.navbar-logo img').attr('src','images/logo-black.png');
  
  
      }else{
  
          navbar.removeClass("nav-scroll");
          $('.navbar-logo img').attr('src','images/logo-white.png');
  
      }
  
      });
  
      $(window).on("load",function (){
        
        var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");
        
        if(bodyScroll > 80){
        
        navbar.addClass("nav-scroll");
        $('.navbar-logo img').attr('src','images/logo-black.png');
        
        
        }else{
        
        navbar.removeClass("nav-scroll");
        $('.navbar-logo img').attr('src','images/logo-white.png');
        
        }
      });

      // SMOOTH SCROLL
      $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 80
          }, 100);
          event.preventDefault();
        });
      }); 

      // CARD HOVER
      $( ".card" ).hover(
        function() {
          $(this).addClass('shadow-lg'); 
        }, function() {
          $(this).removeClass('shadow-lg');
        }
      );

})(jQuery);
