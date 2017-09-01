var bodyWidth = 0;
  $(document).ready(function(){
  $('.logo-container').css('left','0');
  $('.contain-links').css('right','0');
  bodyWidth = $(window).width();

  // $('.contain').css('right','50%');
});
$(window).resize(function(){
  bodyWidth = $(window).width();
});

var imagePoint = 1;
setInterval(function(){
  if(imagePoint == 1){
    toSecondImageGallery();
  }
  if(imagePoint == 2){
    toThirdImageGallery();
  }
  if(imagePoint == 3){
    toFirstImageGallery();
  }
  imagePoint++;
  if(imagePoint == 4){
    imagePoint = 1;
  }
},8000);
var once = 0;

// setInterval(function(){
//   if(once == 0){
//     $('.firstimage').css('right','-100%');
//   }else{
//     $('.firstimage').css('right','0');
//   }
//   once++;
//   if(once == 2){
//     once = 0;
//   }
// },2000);
// function toSecondImageGallery(){
//   $('.secondimage').css('transition','right 2s ease-in-out');
//   $('.secondimage').css('right','0');
//
//   $('.firstimage').css('right','100%');
//
//   $('.thirdimage').css('transition','right 0s ease-in-out');
//   $('.thirdimage').css('right','-100%');
// }
// function toThirdImageGallery(){
//   $('.thirdimage').css('transition','right 2s ease-in-out');
//   $('.thirdimage').css('right','0');
//   $('.secondimage').css('right','100%');
//
//   $('.firstimage').css('transition','right 0s ease-in-out');
//   $('.firstimage').css('right','-100%');
// }
// function toFirstImageGallery(){
//   $('.firstimage').css('transition','right 2s ease-in-out');
//   $('.firstimage').css('right','0');
//   $('.thirdimage').css('right','100%');
//
//   $('.secondimage').css('transition','right 0s ease-in-out');
//   $('.secondimage').css('right','-100%');
// }
(function() {
  bodyWidth = $('body').width()

  var logoContainerWidth = $('.logo-container').width();

  var lineMaker = new LineMaker({
  position: 'absolute',
  lines: [
    {top: 50, left: 67, width: '10vw', height: 1.5, color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'LeftRight' }},
    {top: 50, left: 67, width:1.5, height: '70vh', color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'BottomTop' }},


    {top: 20, left: 0, width: '28vw', height: 1.5, color: '#a6c4ed', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'LeftRight' }},
    {top: 20, left: '28vw', width: 1.5, height: 40, color: '#a6c4ed', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 800, direction: 'TopBottom' }},

    {top: 200, left: 0, width: '50vw', height: 3, color: '#a6c4ed', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 800, direction: 'LeftRight' }},

    {top: 0, left: '70vw', width: 2, height: '17vh', color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 800, direction: 'TopBottom' }},
    {top: '17vh', left: '64.1vw', width: '6vw', height: 2, color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1800, direction: 'RightLeft' }},
  ]
  });
  if($('body').width() > 500){
    setTimeout(function() {
      lineMaker.animateLinesIn();
      }, 250);
  }
  })();


$(document).scroll(function(){
  if(!gallery && !menuButtonClicked){


    $('.galleryitem').css('background-position','center '+(($(this).scrollTop()*0.4)-100)+'px');
    if($(this).scrollTop() > ($('.contain').height()+100)/4){
      $('.nav').css('opacity','1');
      $('.mission-img').css('opacity','1');
    }else{
      $('.nav').css('opacity','0');
    }
    if($(this).scrollTop() > ($('.contain').height())){
      $('.mission-statement').css('opacity','1');
    }
    if($(this).scrollTop() > ($('.contain').height()*1.49)){
      $('.what-we-do-h1').css('opacity','1');
    }
    if($(this).scrollTop() > ($('.contain').height()*1.52)){
      $('.what-we-do-row').css('opacity','1');
      $('.what-we-do-h1').css('margin-top','1');
      $('.what-we-do-h2').css('margin-top','0');
      $('.what-we-do-des').css('margin-top','50px');
    }
}
});

var menuButtonClicked = false;
$('.menu-button').click(function(){
  if(!menuButtonClicked){
    $('.contain-menu').css('right','0');
    $('.side-menu-left').css('transform','translate(8px,12px) rotate(45deg)');
    $('.side-menu-right').css('transform',' translate(8px,-12px) rotate(-45deg)');
    $('.middle-menu').css('width','0');
    menuButtonClicked = true;
  }else{
    $('.contain-menu').css('right','-100%');
    $('.side-menu-left').css('transform','none');
    $('.side-menu-right').css('transform','none');
    $('.middle-menu').css('width','100%');
    menuButtonClicked = false;
  }

});
$('#memories-link').click(function(){
  window.location.pathname = '/gallery';
});
$('#team-link').click(function(){
  window.location.pathname = '/team';
});
$('#connect-link').click(function(){
  window.location.pathname = '/connect';
});
$('#comics-link').click(function(){
  window.location.pathname = '/comics';
});
