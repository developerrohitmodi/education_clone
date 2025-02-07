$(document).ready(function(){
    $(".innovative_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 1500,
        arrows: false,
        dots: false,
        draggable: true,
        infinite: true,
        swipe: true,
        swipeToSlide: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });


    // ToggleBar Click Event===========================
    $(".menu_togalbar").click(function(){
        $(".menu_list").addClass("active");
        $(".menu_remove").addClass("active");
        $("body").addClass("overflows");
    });
    $(".menu_remove").click(function(){
        $(".menu_list").removeClass("active");
        $(this).removeClass("active");
        $("body").removeClass("overflows");
    });

});
