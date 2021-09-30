$(document).ready(function() {

// js for counter //

(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 50000,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('.timer').countTo({
            from: 0,
            to: 8,
            speed: 1500,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

         $('.timer-2').countTo({
            from: 0,
            to: 42,
            speed: 1500,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

          $('.timer-3').countTo({
            from: 0,
            to: 1000,
            speed: 1500,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

          $('.timer-4').countTo({
            from: 0,
            to: 5000,
            speed: 1500,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });

    });

// end js for counter //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start js for navbar //
if($(window).width()<991){
(function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.

    // Clicking away from dropdown will remove the dropdown class
  
    $('.dropdown').click(function(e) {
      $('.drop-mobile').toggle();
      $(".up-arrow").toggle();
      $(".down-arrow").toggle();

      // Close one dropdown when selecting another
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
$(".re-show").toggle();
$(".re-hide").css("display" ,"block");
$(".cover").toggle();
    });
  $('.re-show').click(function(event) {
 if (document.dir=="rtl") {
     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");
$(".navv").toggle();
  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});
$('.re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
 $(".cover").toggle();
 $(".re-show").toggle();
});
 $('.cover').on('click', function() {
$(".re-hide").click();
 });
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
if($(window).width()>991){
  (function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
 
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
       
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
$(".re-show").toggle();
$(".re-hide").css("display" ,"block");
$(".cover").toggle();
    });
  $('.re-show').click(function(event) {
 if (document.dir=="rtl") {
     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}

    $("body").css("overflow" , "hidden");
$(".navv").toggle();
  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});
$('.re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
 $(".cover").toggle();
 $(".re-show").toggle();
});





 $('.cover').on('click', function() {
$(".re-hide").click();
 });
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
// end  js for navbar //


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start footer accordion  //
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
}
//end footer accordion //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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



// companies carousel //
if($(window).width()<991){
    var owl = $('.companies');
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
                items: 3
            },
            600: {
                items:3
            },
            1200: {
                items: 3
            }

        }
    });
  };
  // end companies carousel //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// wow js ///
new WOW().init();
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// our-team carousel //
if($(window).width()<991){
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
                items: 2
            },
            600: {
                items:2
            },
            1200: {
                items: 2
            }

        }
    });
  };
  // end our-team carousel //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// our-news carousel //
if($(window).width()<991){
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
                items: 2
            },
            600: {
                items:2
            },
            1200: {
                items: 2
            }

        }
    });
  };
  // end our-news carousel //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

