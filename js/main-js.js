
$(document).ready(function(){
   $(".item-image").colorbox({
       href: function() {
            return $(this).find('.group1').attr('href');
       },
   });

    $(".icon-dropdwon").click(function(){
        $(".dropdown-menu").slideToggle(1000);
    });


    $('.parallax-slider').slick({
        rtl: true ,
        // autoplay: true,
        arrows: true,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='img/arrow-point-to-right.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/arrow-point-to-left.png'>",
        infinite: true,
    });

    $('.logos-slider').slick({
        rtl: true ,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1 ,
        arrows: false,
        infinite: true,
        autoplaySpeed: 1000,
    });

    $("#backToTop").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#header").offset().top
        }, 2000);
    });


});



