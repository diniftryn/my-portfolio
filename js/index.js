(function ($) {

  "use strict";

    // HEADER
    $(window).on("scroll",function () {

      var bodyScroll = $(window).scrollTop(),
          navbar = $(".navbar");
  
      if(bodyScroll > 130){
  
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
        
        if(bodyScroll > 130){
        
        navbar.addClass("nav-scroll");
        $('.navbar-logo img').attr('src','images/logo-black.png');
        
        
        }else{
        
        navbar.removeClass("nav-scroll");
        $('.navbar-logo img').attr('src','images/logo-white.png');
        
        }
      });

})(jQuery);
