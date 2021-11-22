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
        
      ]
})
$('.partners__slider').slick ({
  nextArrow:false,
  prevArrow:false,
  dots: true,
  infinite:true,
  slidesToShow:6,
  rows:1,
  slidesToScroll: 6,
  slidesPerRow: 6,
  autoplay:true,
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
})
$('.clients__slider').slick ({
  nextArrow:false,
  prevArrow:false,
  dots: true,
  infinite:true,
  slidesToShow:6,
  rows:1,
  slidesToScroll: 6,
  slidesPerRow: 6,
  autoplay:true,
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
})

});
