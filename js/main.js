$(function(){
$('.slider__inner').slick({
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
    infinite:false
    
})

$('.news__slider').slick({
    nextArrow:false,
    prevArrow:false,
    dots: true,
    infinite:false,
    slidesToShow:2,
    rows:2,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$('.partners__slider').slick({
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
    dots: false,
    infinite:false,
    slidesToShow:4,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})


});
