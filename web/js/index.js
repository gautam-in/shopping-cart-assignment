var showMenu = document.getElementById('m_menu');
var classes = [];
showMenu.addEventListener('click', function () {
  classes = showMenu.className.split(" ");
  
  var i = classes.indexOf("cross");

  if (i >= 0){
    classes.splice(i, 1);
    showMenu.className = classes.join("");
    document.getElementById('m_menu').innerHTML = '&#9776;';
    document.getElementById('menu').style.display = "none";
    document.getElementById('menu').style.width = "0%";
    
  } 
  else{
    classes.push("cross");
    showMenu.className = classes.join(""); 
    document.getElementById('m_menu').innerHTML = '&#10005;';
    document.getElementById('menu').style.display = "block";
    document.getElementById('menu').style.width = "100%";
    
  } 
});
window.addEventListener('resize',function(){
  if(window.innerWidth > 768)
  {
    classes.push("");
    showMenu.className = classes.join("");
    document.getElementById('m_menu').innerHTML = '&#9776;';
    document.getElementById('menu').style.display = "block";
    document.getElementById('menu').style.width = "100%";
  }
  else
  {
    classes.push("");
    showMenu.className = classes.join("");
    document.getElementById('m_menu').innerHTML = '&#9776;';
    document.getElementById('menu').style.display = "none";
    document.getElementById('menu').style.width = "0%";
  }
});