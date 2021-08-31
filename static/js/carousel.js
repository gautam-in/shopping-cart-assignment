function initializeCarousel(){
    let carouselTimer;
    // total no of items
	let num_items = document.querySelectorAll(".productCarousel__container__item").length;
    
	// position of current item in view
	let current =  1;
    document.querySelector(".productCarousel__indicator__dots[data-position='" + current + "']").classList.add('active');
    document.querySelectorAll(".productCarousel__container__item").forEach(function(element, index) {
        element.style.order = index+1;
    });
    carouselTimer = setInterval(function(){
        goToNext();
    }, 3000);

    document.querySelector("#productCarousel ul").addEventListener('transitionend', () => {
        if(current > num_items) current = 1;
        changeOrder(current++, num_items);
    });
}
function goToNext(){
    document.querySelector("#productCarousel ul").classList.add('productCarousel__container-transition');
    document.querySelector("#productCarousel ul").style.transform = 'translateX(-100%)';
}
function changeOrder(current, num_items) {
    // change current position
    if(current == num_items)
        current = 1;
    else 
        current++;

    let order = 1;

    // change order from current position till last
    for(let i=current; i<=num_items; i++) {
        document.querySelector(".productCarousel__container__item[data-position='" + i + "']").style.order = order;
        order++;
    }

    // change order from first position till current
    for(let i=1; i<current; i++) {
        document.querySelector(".productCarousel__container__item[data-position='" + i + "']").style.order = order;
        order++;
    }
    diselectOthers('.productCarousel__indicator__dots', 'active');
    // translate back to 0 from -100%
    // we don't need transitionend to fire for this translation, so remove transition CSS
    document.querySelector("#productCarousel ul").classList.remove('productCarousel__container-transition');
    document.querySelector("#productCarousel ul").style.transform = 'translateX(0)';
    document.querySelector(".productCarousel__indicator__dots[data-position='" + current + "']").classList.add('active');
}