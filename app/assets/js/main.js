$( document ).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true
    });
    function mobileMenu(menuID,menulist,devicewidth){
        $(window).on('resize', function(){
             if($(this).width() < devicewidth){
                if($(menuID).prop('checked') == true){
                    $(menulist).show();
                }else{
                    $(menulist).hide();
                }
                $(menuID).click(function(){
                    if($(this).is(":checked")){
                        $(menulist).slideDown( "slow", function() {
                            $(menulist).show();
                        });
                    }
                    else if($(this).is(":not(:checked)")){
                        $(menulist).slideUp( "swing", function() {
                            $(menulist).hide();
                        });
                    }
                });
            }else{
                $(menulist).show();
            }
        });
    }
    mobileMenu("#product-hamburger",".product-categories",991);
    mobileMenu("#header-hamburger",".main-nav",768);
  });