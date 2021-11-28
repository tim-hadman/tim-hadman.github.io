$(function(){
$('.slider__inner').slick({
   infinite:false,
   nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
   prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
   autoplay:true
    
})

$('.Testimonialst__items-inner').slick({
  infinite:false,
  autoplay:false,
  nextArrow:false,
    prevArrow:false,
    slidesToShow: 3,
    responsive: [
     
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
  
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows:1,
          }
        }
        
        ]
})
$('.news__slider').slick({
    nextArrow:false,
    prevArrow:false,
    dots: true,
    infinite:false,
    slidesToShow: 2,
    responsive: [
     
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: false,
            rows:1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows:1,
          }
        }
        
        ]
})
$('.partners__slider').slick ({
  nextArrow:false,
  prevArrow:false,
  
  infinite:true,
  slidesToShow:6,
   slidesToScroll: 6,
  slidesPerRow: 6,
  autoplay:true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      
    ]
})
$('.clients__slider').slick ({
  nextArrow:false,
  prevArrow:false,
  dots: false,
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
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      
    ]
})

$('.header__btn-menu ').on('click', function(){
$('.menu ul').slideToggle();
});

});
