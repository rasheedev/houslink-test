/* --------------------------------------------------------------------
-----------------------------------------------------------------------
   Website Name : NZ Transport Agency
   Author : Rasheed
   Version : 1.0.0
   Created : June 2020
   File Description : Main JS file
-----------------------------------------------------------------------
---------------------------------------------------------------------*/

/* Preloader */ 
$(window).on('load', function() { 
    $('#preloader').delay(500).fadeOut('slow');
    $('.spinner').delay(250).fadeOut();
    $('body').delay(250).css({
            'overflow': 'visible'
    });
});


$(document).ready(function(){

    "use strict";

    // Responsive Navigation Bar
    function mobileMenu() {
        if ($(window).width() < 1200) {
          $(".mainmenu").addClass("mobilemenu");
        } else if ($(window).width() >= 1200) {
            $(".mainmenu").removeClass("mobilemenu");
        }
    }
    mobileMenu();
    $(window).resize(function() {
        mobileMenu();
    });

    function menuToggle() {
        $(".mainmenu").find(".mainmenu-toggler").on("click", function () {
            if($(this).hasClass("open")) {
                $(this).removeClass("open");
            } else {
                $(this).addClass("open");
            }
            var menuCollapse = $(this).next('.mainmenu-collapse');
            if (menuCollapse.hasClass("open")) {
                menuCollapse.slideUp().removeClass("open");
            } else {
                menuCollapse.slideDown().addClass("open");
            }
        });
    }
    menuToggle();

    $(".mainmenu").find(".has-children > a").click(function() {
        
        if ($(".mainmenu").hasClass("mobilemenu")) {
            var submenuLI = $(this).parent("li:first");
            if (submenuLI.hasClass("open")) {
                submenuLI.find("ul:first").slideUp(function(){
                    submenuLI.removeClass("open");
                });
            }
            else {
                submenuLI.addClass("open");
                submenuLI.find("ul:first").slideDown();
            }
            
            return false;
        }
        
    });

    $(".mainmenu").find(".has-children").hover(
        function() {
            if (!($(".mainmenu").hasClass("mobilemenu"))) {
                $(this).find("ul:first").stop(true, true).fadeIn("fast");
            }
        }, 
        function() {
            if (!($(".mainmenu").hasClass("mobilemenu"))) {
                $(this).find("ul:first").stop(true, true).delay(100).fadeOut("fast");
            }
        }
    );

    $(window).resize(function() {
        if ((!$(".mainmenu").hasClass("mobilemenu"))) {
            $(".mainmenu").find(".has-children > ul").hide();
            $(".mainmenu").find(".has-children").removeClass("open");
        }
    });


    /* Back to Top */ 
   $(window).on("scroll", function() {
        if($(this).scrollTop() > 700)
            $(".back-to-top").fadeIn(); 
        else
            $(".back-to-top").fadeOut();
    });
    $(".back-to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


    // Home Carousel
    $("#owl-home").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplayHoverPause: true,
        autoplay: 2000,
        mouseDrag: true,
        dots:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Services Carousel
    $('#owl-services').owlCarousel({ 
        items: 3,
        nav: true,
        loop: true,
        margin: 40,
        autoplayHoverPause: true,
        autoplay: 2500,
        mouseDrag: true,
        dots: false, 
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items:1,
                nav: true
            },
            600: {
                items:2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });

    // News Carousel
    $("#news-home").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplayHoverPause: true,
        autoplay: 2000,
        mouseDrag: true,
        dots:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // News Masonry
    var grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: 0
    });
    grid.imagesLoaded().progress( function() {
        grid.masonry();
    });
    

});
