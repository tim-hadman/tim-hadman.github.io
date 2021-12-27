$ (function(){

    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: false,
    autoplaySpeed: 3000,
      });
      $('.clients__items, .partners__items').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
    autoplaySpeed: 3000,
      });
      $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
    autoplaySpeed: 3000,
      });
      $('.works__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: false,
    autoplaySpeed: 3000,
      });
})
