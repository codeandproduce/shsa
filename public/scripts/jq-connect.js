$(document).ready(function(){
  console.log($(window).width());
  if($(window).width()<1000){
    setTimeout(function(){
      $('ul').css('margin-top','40px');
      $('ul').css('opacity','1');
    },800);
  }else{
    setTimeout(function(){
      $('ul').css('margin-top','100px');
      $('ul').css('opacity','1');
    },800);
  }

});
