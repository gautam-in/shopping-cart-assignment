import styles from '../styles/app.module'
import '../styles/global'

$(".shopping-cart").fadeToggle( "fast");
(function(){
 
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
      
    });
    
  })();