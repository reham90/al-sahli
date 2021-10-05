$(document).ready(function() {

// js for counter //

var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-columns').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// end js for counter //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start js for navbar //



 $(".nav-toggle").click(function() {
        $(".menu-screen").addClass("active");
    });

    // Remove Active Class
    $(".re-hide").click(function() {
        $(".menu-screen").removeClass("active");
    });
// end  js for navbar //


// start slider carousel //
   var owl = $('.slider');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })
  
// end slider carousel //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// wow js ///
new WOW().init();
   

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// our-team carousel //

    var owl = $('.our-team');
    owl.owlCarousel({
        margin: 23,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1200: {
                items: 4
            }

        }
    });
 
  // end our-team carousel //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// our-news carousel //

    var owl = $('.our-news');
    owl.owlCarousel({
        margin: 23,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1200: {
                items: 3
            }

        }
    });
  });
 
  // end our-news carousel //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if($(window).width()<991){
   var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function myFunction(y) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
  
    $(this).siblings(".panel").slideToggle(200);

  

});
}
$(".accordion").click(function(){
  $(this).children('i').toggle();
 
});
}