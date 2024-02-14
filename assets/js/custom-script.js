//*** Loader Show
$(window).on('load', function(){
  $('.codex-loader').fadeOut();
});
$(document).ready(function(){
//*** Menu Js 
var cdxmenu = $(window).width() + 17;
if (cdxmenu <= 1199 ) {   
  $(".submenu-list,.secodnmenu-list").slideUp('');

  
  $(".codex-menu li.menu-item > a" ).on( "click", function() {      
    $(this).parents('.codex-menu').find(".submenu-list").slideUp('');  
    $(this).parents('.codex-menu').find(".secodnmenu-list").slideUp('');                
    if($(this).next(".submenu-list").is(':hidden')){
      $(this).next(".submenu-list").slideToggle('');  
    }                
  });

  $(".codex-menu li.sub-menu-item > a" ).on( "click", function() {      
    $(this).parents('.codex-menu').find(".secodnmenu-list").slideUp('');         
    if($(this).next(".secodnmenu-list").is(':hidden')){
      $(this).next(".secodnmenu-list").slideToggle('');  
    }                
  });
} 
$(".mobilemenu-toggle").on( "click", function() {
  $(".codex-menu").addClass('active');
});

$(".close-menu").on( "click", function() {
  $(".codex-menu").removeClass('active');
});

//*** Header 
$( ".search-toggle" ).on( "click", function() {
    $(".search-bar").addClass('open');
});
$( ".clsoe-search" ).on( "click", function() {
    $(".search-bar").removeClass('open');
});
$(".sidebar-action" ).on( "click", function() {
    $(".cdxmenu-list,.doc-sidebar").toggleClass('active');
});



//*** This Class Image Set His Parent Div On background
$('.img-src').css({'display' : 'none'});
$('.img-src').each(function () {
  $(this).parent().css({
    'background-image':'url(' + $(this).attr('src')+ ')',
    'background-size': 'cover',
    'background-position': 'center',
    'display' : 'block'
  }); 
});

  //*** Shop pages 
  $(".proshare-toggle").on( "click", function() {
      $(".share-iconlist").toggleClass('show');
  });
  $(".product-size li , .product-color li, .populartag-list li, .cdx-pagination li").on( "click", function() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active')
  });
  $(".filter-toggle" ).on("click", function() {
      $(".innersidebar-filter").toggleClass('active');
  });
  $(".close-filter" ).on("click", function() {
      $(".innersidebar-filter").removeClass('active');
  });

  $(document).on("click", ".top-filter .filter-title", function() {                                 
    if(!$(this).next('.filter-list').hasClass('active')){        
      $('.filter-list').removeClass('active');
      $(this).next('.filter-list').addClass('active')
    }else{
      $(this).next('.filter-list').removeClass('active');
    }            
  });

  $('.pro-qty').val(parseInt($('.pro-qty').val()))

  //*** Quantity Counter - START 
  $(document).on('click','.count-plus',function(){
    $(this).siblings('.pro-qty').val(parseInt($(this).siblings('.pro-qty').val()) + 1 );
  });
  $(document).on('click','.count-minus',function(){
    $(this).siblings('.pro-qty').val(parseInt($(this).siblings('.pro-qty').val()) - 1 );
    if ($(this).siblings('.pro-qty').val() == 0) {
      $(this).siblings('.pro-qty').val(1);
    }
  });


  //*** Grid & List View - START 
  $( ".listview-toggle" ).on( "click", function() {
    $('.grid-view-page').addClass('list-view-page').removeClass('grid-view-page');       
  });
  $( ".gridview-toggle" ).on( "click", function() {
    $('.list-view-page').addClass('grid-view-page').removeClass('list-view-page');    
  });

  //*** On Click Remove Table Row- Product Page(Wishlist/Cart)
  $('.cart-action a.delete').on('click',function(){
    $(this).parents('tr').remove()
  });
  $('a.removeAll_cart').on('click',function(){
    $('tbody.cartBody').remove()
  }); 

  //*** Drowpdown Menu
  $(".dropdownmenu .dropdown-action" ).on( "click", function() { 
    if($(".dropdownitem-list").hasClass("open")){
      $('.dropdownitem-list').removeClass('open');  
    }  
    $(this).siblings('.dropdownitem-list').toggleClass('open');   
  });


  
});

$(window).on('load', function() {
  $('.newslatter-popup').modal('show');
});


$(document).on("click", function(event){ 
  //*** DropdownMenu-Hide
  var $trigger = $(".dropdownmenu , .dropdownitem-list");
  if($trigger !== event.target && !$trigger.has(event.target).length){ 
    if($(".dropdownitem-list").hasClass("open")){
      $('.dropdownitem-list').removeClass('open');  
    }                 
  }  

  //*** SearchBar-Hide
  var $trigger2 = $(".search-bar, .search-toggle, .search-bar.open");
  if($trigger2 !== event.target && !$trigger2.has(event.target).length){ 
    if($(".search-bar").hasClass("open")){
      $('.search-bar').removeClass('open');  
    }                 
  }  

  //*** Mobile-Menu
  var $trigger3 = $(".mobilemenu-toggle, .codex-menu, .codex-menu.active");
  if($trigger3 !== event.target && !$trigger3.has(event.target).length){ 
    if($(".codex-menu").hasClass("active")){
      $('.codex-menu').removeClass('active');  
    }                 
  }  
});  

//*** Sticky Header 
var heightScroll =$('.cdx-header').height()
$(window).scroll(function() {    
  var sticky = $('.cdx-header');
  scroll = $(window).scrollTop();     
  if(!$('.codex-menu').hasClass('active')){
    if (scroll >= heightScroll) { 
      sticky.addClass('fixed'); 
    }
    if (scroll == 0){ 
      sticky.removeClass('fixed');
    }  
  }         
});

//*** Back To Top
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    $('.taptoscroll-top').addClass('show');
  } else {
    $('.taptoscroll-top').removeClass('show');
  }
});
$(document).ready(function(){
  $(document).on("click",'.taptoscroll-top',function(){    
    $('html, body').animate({scrollTop:0}, '500');
  });
});


//*** documantation ***//
$("#sidebar-menu ul li a[href^='#']").on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  var header_height = $('.cdx-header').outerHeight();
  console.log(header_height)
  $('html, body').animate({
      scrollTop: $(hash).offset().top - header_height
  }, {
      duration: 500
  });
});