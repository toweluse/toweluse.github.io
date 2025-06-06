jQuery(function ($) {

    'use strict';

    // OnePageNav
    // Slick Slider
    // Isotope
    // CounterUp
    // Toggle Menu
    // TxtType
    // Scroll Up

    // -------------------------------------------------------------
    //  SlideToggle
    // -------------------------------------------------------------  
    
    mobileDropdown ();
    function mobileDropdown () {
      if($('.navbar-nav').length) {
        $('.navbar-nav .dm-dropdown').append(function () {
          return '<i class="fa fa-angle-down icon"></i>';
        });
        $('.navbar-nav .dm-dropdown .icon').on('click', function () {
          $(this).parent('li, .dm-dropdown').children('ul, .dm-dropdown-menu').slideToggle();
        });
      }
    }     

    // -------------------------------------------------------------
    //  Mobile Menu Collapse
    // -------------------------------------------------------------

    var navMain = $(".collapse");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });    

    // -------------------------------------------------------------
    //  OnePageNav
    // -------------------------------------------------------------
        
    $('.navbar-nav').onePageNav({});

    // -------------------------------------------------------------
    //  S croll Fixed Top
    // -------------------------------------------------------------
        
    $(window).bind('scroll', function() {
        var navHeight = $('.sa-banner').height();
        if ($(window).scrollTop() > navHeight) {
            $('.sa-menu-style-1').addClass('fixed-top');
         }
        else {
            $('.sa-menu-style-1').removeClass('fixed-top');
         }
    });

    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    $(".video-slider").slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 6,
        autoplay:true,
        autoplaySpeed: 1000, 
        speed: 1000,
        pauseOnHover:true,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-angle-left"></i>',
        prevArrow: '<i class="fas fa-angle-right"></i>',
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow:4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ]         
    }); 

    $(".brand-slider").slick({
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        autoplay:true,
        autoplaySpeed: 1000, 
        speed: 1000,
        pauseOnHover:true,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow:4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ]         
    }); 

    $(".testimonial-slider").slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed: 1000, 
        speed: 1000,
        pauseOnHover:true,
        slidesToScroll: 1,    
        nextArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-right"></i>',    
    }); 
  

    $(".testimonial-slider-1").slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 2,
        autoplay:true,
        autoplaySpeed: 1000, 
        speed: 1000,
        pauseOnHover:true,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-right"></i>', 
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ]         
    }); 


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.slick-slider').slick('setPosition');
    })       

    // -------------------------------------------------------------
    //  Isotope
    // -------------------------------------------------------------

    $('.portfolio-filter').isotope({
        itemSelector: '.portfolio-item',
    });

    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $('.portfolio-filter').isotope({ filter: filterValue });
        $('.portfolio-menu li').removeClass('active');
        $(this).addClass('active');
    });


    // -------------------------------------------------------------
    // CounterUp
    // -------------------------------------------------------------

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    // -------------------------------------------------------------
    //  Toggle Menu
    // -------------------------------------------------------------


    $("body").on("click", ".sg-toggle", function(e) {
        e.preventDefault();
        $('body').toggleClass( "sidebar-active" );
        $(this).toggleClass( "active" ); 
    });

    $("body").on("click", "#close-menu", function(e) {
        e.preventDefault();
        $('body').toggleClass( "sidebar-active" );
        $(this).toggleClass( "active" ); 
    });

    $("body").on("click", "#ncf-overlay", function(e) {
        e.preventDefault();
        $('body').removeClass( "sidebar-active" );
        $('.sg-toggle').removeClass( "active" ); 
    }); 

    // -------------------------------------------------------------
    //  TxtType
    // -------------------------------------------------------------

    var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid transparent}";
            document.body.appendChild(css);
        };    

    /*==============================================================*/
    // Scroll Up
    /*==============================================================*/

    $("body").append(' <a id="scrollUp" class="show"></a> ');

    var btn = $('#scrollUp');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });  


    // -------------------------------------------------------------
    //  backstretch slide for main body
    // -------------------------------------------------------------

    $(".bg-slider").backstretch([ "images/bg/bg2.jpg","images/bg/bg1.jpg","images/bg/bg3.jpg"], {fade: 950,duration: 2000});
    
    // -------------------------------------------------------------
    //  Video Player
    // -------------------------------------------------------------
    

    $("#video-player").YTPlayer();

    // -------------------------------------------------------------
    //  Ripples
    // -------------------------------------------------------------    

    $('.water-background').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.04,
    });    

    /*==============================================================*/
    // Send Email
    /*==============================================================*/ 

    $('#contactform').submit(function (e) {
        $('.flashinfo').hide();
        e.preventDefault();
    })
    .validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                digits: true,
                required: true,
                minlength: 5,
                maxlength: 12
            },
            name: {
                required: true,
                minlength: 5
            },
            subject: {
                required: true,
                minlength: 10
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            email: {
                required: 'Check your email input '
            },
            name: {
                required: 'Please check your first name input'
            },
            subject: {
                required: 'Please check your message subject input'
            },
            message: {
                required: 'Please write something for us'
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "https://mailpostexample.herokuapp.com/",
                data: $(form).serialize(),
                beforeSend: function () {
                    $('.flashinfo').hide();
                    $('.btn-l').html('Sending...')
                    $('input, textarea').attr('readonly', "readonly");
                },
                success: function (msg) {
                    if (msg == 'your message send') {
                        $('#contactform').trigger("reset");
                        $('.btn-l').html('Send Now')
                        $('input, textarea').removeAttr('readonly');
                        $('.flashinfo').show();
                        $('.flashinfo').html('Your message has been sent, I will reply to you shortly');
                    } else {
                        $('input, textarea').removeAttr('readonly');
                        $('#contactform').trigger("reset");
                        $('.flashinfo').show();
                        $('.flashinfo').html('<span>report_problem</span>something unknown error');
                    }
                }
            });
            return false;
        }
    });     

// script end
});



  
