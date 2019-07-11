var ToggleCategories = function(){
	var toggleBtn =  document.querySelector('.category-mobile');
	var ul = document.querySelector('.category-block');
	toggleBtn.addEventListener('click',toggleNav);
	ul.addEventListener('click', selectCategory);
	function toggleNav(){
		if(ul.classList.contains('active')){
			ul.classList.remove('active');
			this.classList.remove('active');
		}
		else{
			ul.classList.add('active');
			this.classList.add('active');
		}
	}
	function selectCategory(e){
		if(toggleBtn.classList.contains('active')){
			toggleBtn.innerText= e.target.innerText;
			ul.classList.remove('active');
			toggleBtn.classList.remove('active');
		}
		
	}
}
export default ToggleCategories;