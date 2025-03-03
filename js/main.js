
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Simulate a loading delay
    setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
      }, 1000); // Adjust the time as needed

    });

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        responsive:{
            0:{
                items:1,
               
            },
            500:{
              items:1,
            },
            600:{
                items:1,
                
            },
            1000:{
                items:2,
                // nav:true,
                
            }
        }
    });
    // Custom Navigation Events
    $('.btn-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.btn-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    // Custom Dots Click Event
    $(".dot").click(function(){
        var slideIndex = $(this).data("slide");
        owl.trigger("to.owl.carousel", [slideIndex, 500]);
        $(".dot").removeClass("active");
        $(this).addClass("active");
    });

    
});

