function movetoHome(){
	window.location.href="/";
}
function toggleMenu(){
  
  let cart = document.getElementsByClassName("parent-overlay")[0].style.display ==='block';
  if(cart){
  	x = document.getElementsByClassName("mob-nav-list")[0];
  } else {
  	x = document.getElementsByClassName("mob-nav-list")[1];

  }
	if (x.style.display === 'block') {
   	  x.style.display = 'none';
  	} else {
  	  x.style.display = 'block';
  	}
}
setTimeout(function(){
	document.getElementsByTagName("body")[0].addEventListener("keydown", function(e){
		 if (event.keyCode === 9) {
		 		 if (event.target['id'] === 'checkout') {
		 		 	  event.preventDefault();
      			document.getElementById('close').focus();
		 		 }
         if (event.target['id'] === 'shopping') {
            event.preventDefault();
            document.getElementById('shopping').focus();
         }

		 }

	})
});
