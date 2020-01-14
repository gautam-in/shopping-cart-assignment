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
	
	if (x.style.display === 'none') {
   	  x.style.display = 'block';
  	} else {
  	  x.style.display = 'none';
  	}
}