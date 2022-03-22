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

      // ANIMATION
      var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {
    
          if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
            
            i++;
    
            $(this.element).addClass('item-animate');
            setTimeout(function(){
    
              $('body .animate-box.item-animate').each(function(k){
                var el = $(this);
                setTimeout( function () {
                  var effect = el.data('animate-effect');
                  if ( effect === 'fadeIn') {
                    el.addClass('fadeIn animated-fast');
                  } else if ( effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated-fast');
                  } else if ( effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated-fast');
                  } else {
                    el.addClass('fadeInUp animated-fast');
                  }
    
                  el.removeClass('item-animate');
                },  k * 200, 'easeInOutExpo' );
              });
              
            }, 100);
            
          }
    
        } , { offset: '85%' } );
      };

      $(function(){
        contentWayPoint();
      });

})(jQuery);
