$(document).ready(function () {

    var isMenuOpened = false;
    //open menu
    $('#menu-button').click( function(){
       $('#menu-button').toggle(10);
       isMenuOpened = true;
       
      
       var current = document.getElementsByClassName('current');
       var nSiblings = $(current).siblings('.panel').length;
       var index = 1;
       var margin = 80;
       
        $('.panel-container').css('height', ($('.panel').height() + (nSiblings+1)*margin) + 'px' )
       
        $('#close-menu-button').toggle(10);
        
       $(current).siblings('.panel').each(function(){
           $(this).animate({
                top : (margin*index) + 'px',
                left: (margin*index) + 'px'
            });
           
           $(this).css('z-index',index);
           index++;
       });
       
       
      $(current).animate({
           top: ((margin*index)+1) + 'px',
           left: ((margin*index)+1) + 'px'
        });
  
    });
    
    //close menu
    $('#close-menu-button').click(function(){
       
       $('.panel').animate({
                top : 0,
                left: 0
            });
       $('#menu-button').toggle(10);
       $('#close-menu-button').toggle(10);
        $('.panel-container').css('height', $('.panel').height());
       isMenuOpened = false;

    });
    
    //transition to another content panel
    $('.panel').click(function(){
       if(isMenuOpened){
           
        $(this).css('z-index', 100);
         
           $('.panel').animate({
                top : 0,
                left: 0
            });
            $('#menu-button').toggle(10).fadeIn();
             $('#close-menu-button').toggle(10);
             $('.panel-container').css('height', $('.panel').height());
            isMenuOpened = false;
            
       } 
    });
    
    
});