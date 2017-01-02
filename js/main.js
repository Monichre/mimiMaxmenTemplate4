
(function() {
    $(window).on('load', function(){
      $('.effect').each(function(){
        $(this).addClass('active');
      })
      $('.fade').addClass('active');
    });



    $('.cta').click(function(){
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      }, 1000);
    });

    // $('.first').bind('mousewheel', function(e){
    //   return false;
    // });

    $( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });




})();
