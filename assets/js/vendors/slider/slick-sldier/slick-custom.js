$(document).ready(function() {

  // product page
   $('.product-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-to'
  });
  $('.product-to').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-for',
    dots: false, 
    arrows: false,
    focusOnSelect: true
  }); 
 $('.slide-1').slick({
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:true,      
    speed:900,    
  });

 //*** home slider ***//
  $('.homearrowlide-1').slick({
      infinite:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite:true,   
      fade: true,   
      speed:600,
      autoplay: true,     
  });



$(".homenumberlide-1").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,   
    fade: true,        
    speed: 500 ,
    dots: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      i = i + 1      
      return '<a href="javascript:void(0);">'+ i +'</a>';
    },   
});


 //custom function showing current slide
  var $status = $('.pagingInfo');
  var $slickElement = $('.slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 2;
      $status.text(i + '/' + slick.slideCount);
  });




 //*** product sldier 4 ***//
 $('.productslide-4').slick({
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint:1200,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }     
    ]
  });

 $('.shopslide-4').slick({
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 421,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


//*** brand sldier 5 ***//
 $('.brandslide-5').slick({
    infinite:false,
    speed:280,
    slidesToShow: 5,
    slidesToScroll: 1,   
    autoplay: true,
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow: 4,
        }
      }, 
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 3,
        }
      },  
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 2,
        }
      }     
    ]
  });
 $('.brandslide-8').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,      
    speed: 200,
    autoplay: true ,
    responsive:[
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 7,
        }
      },       
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      }, 
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },       
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },       
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },       
        
    ]
  });


//*** category sldier 8 ***//
$('.categoryslide-5').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,      
    speed: 320 ,
    autoplay: true ,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        }
      },       
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },       
    ]
  });
 $('.categoryslide-8').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,      
    speed: 320 ,
    autoplay: true ,
    responsive:[
      {
        breakpoint:1440,
        settings:{
          slidesToShow:6,
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:5,
        }
      }, 
      {
        breakpoint:768,
        settings:{
          slidesToShow:4,
        }
      },
      {
        breakpoint:575,
        settings:{
          slidesToShow:3,
        }
      },
      {
        breakpoint:420,
        settings:{
          slidesToShow:2,
        }
      }       
    ]
  });

 //*** testimonial slider ***// 
 $('.testimonialslide-3').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:true,      
    speed:300,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      }, 
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },       
    ]
  });


//*** blog sldie 4 ***//
 $('.blogslide-4').slick({
    infinite: false,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 1,   
    autoplay: true,
    responsive: [
      {
        breakpoint:1366,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint:992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:620,
        settings:{
          slidesToShow:1,
        }
      }       
    ]
 });


    //*** blog sldie 4 ***//
    $('.blogslide-6').slick({
        infinite: false,
        speed: 350,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

 //*** instagram sldier 8 ***//
 $('.instaslide-6').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,      
    speed: 235 ,   
    autoplay: true ,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      }, 
      {
        breakpoint:575,
        settings: {
          slidesToShow: 3,
        }
      }      
    ]
  });






});