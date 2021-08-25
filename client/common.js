const skipNav = document.querySelector(".skipnav");
const tagMain =  document.querySelector('#main');
skipNav.addEventListener("click",()=>{
    tagMain.focus()
});