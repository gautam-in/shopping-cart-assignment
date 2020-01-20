function movetoHome(){
	window.location.href="/";
}
function toggleMenu(){
  let cart = document.getElementsByClassName("cart-overlay")[0].style.display ==='block';
  if(cart){
  	x = document.getElementsByClassName("nav__list-mob")[0];
  } else {
  	x = document.getElementsByClassName("nav__list-mob")[1];
  }
	if (x.style.display === 'block') {
   	  x.style.display = 'none';
  	} else {
  	  x.style.display = 'block';
  	}
}
document.getElementsByTagName("body")[0].addEventListener("keydown", function(e){
	 if (event.keyCode === 9) {
	 		 if (event.target['id'] === 'checkout' || event.target['id'] === 'shopping') {
	 		 	  event.preventDefault();
          document.getElementById('close').focus();
	 		 }
	 }
});
