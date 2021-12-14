async function init(){
    let data_banner=await fetchData('./../../server/banners/index.get.json');

    data_banner.forEach(element => {
        let list = document.createElement('li');
        if(element.order == 1)
        {
            list.setAttribute('class','carousel_slide current');   
        }
        else
            list.setAttribute('class','carousel_slide');
        let im = document.createElement('img');
        im.setAttribute('class','carousel_image');
        im.src = `${element.bannerImageUrl}`;
        list.appendChild(im);
        document.getElementById('carousel_track').appendChild(list);
    });

    const track = document.querySelector('#carousel_track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.button_right');
    const prevButton = document.querySelector('.button_left');
    const dotsNav = document.querySelector('.carousel_nav');
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) =>{
        slide.style.left = slideWidth * index + 'px';
    }
    slides.forEach(setSlidePosition);

    const moveToSlide = (track , currentSlide ,targetSlide) =>{
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current');
        targetSlide.classList.add('current');
    }

    const updateDots = (currentDot,targetDot) =>{
        currentDot.classList.remove('current');
        targetDot.classList.add('current');
    }

    prevButton.addEventListener('click',e=>{
        const currentSlide = track.querySelector('.current');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current');
        const prevDot = currentDot.previousElementSibling;
        moveToSlide(track,currentSlide,prevSlide);
        updateDots(currentDot,prevDot);
    });

    nextButton.addEventListener('click',e=>{
        const currentSlide = track.querySelector('.current');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current');
        const nextDot = currentDot.nextElementSibling;
        moveToSlide(track,currentSlide,nextSlide);
        updateDots(currentDot,nextDot);
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if(!targetDot) return;
        const currentSlide = track.querySelector('.current');
        const currentDot = dotsNav.querySelector('.current');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];
        moveToSlide(track,currentSlide,targetSlide);
        
        updateDots(currentDot,targetDot);
    });

    let data2 = await fetchData('./../../server/categories/index.get.json');
    

    data2 = data2.sort((a,b)=> a.order - b.order);
    console.log(data2);

    data2.forEach( item =>{
        if(item.order != -1)
        {
            console.log(item.description+" "+item.name+" "+  item.imageUrl );
            let div_item = document.createElement('div');
            let div_item_image = document.createElement('div');
            let div_it_image = document.createElement('img');
            div_it_image.setAttribute('class','it_image');
            div_item_image.setAttribute('class','item_image');
            div_item.setAttribute('class','item');
            
            const imgUrl = './../..' + item.imageUrl;
           
            div_it_image.src = item.imageUrl;
            div_item_image.appendChild(div_it_image);
            

            let div_item_description = document.createElement('div');
            let div_item_heading = document.createElement('h3');
            let div_item_about = document.createElement('p');
            let div_item_button = document.createElement('button');
            let div_shadow = document.createElement('div');

            div_item_heading.setAttribute('class','item_heading');
            div_item_about.setAttribute('class','item_about');
            div_item_button.setAttribute('class','item_button');
            div_shadow.setAttribute('class','shadow');
            div_item_description.setAttribute('class','item_description');
            div_item_heading.innerHTML = item.name;
            div_item_about.innerHTML = item.description;
            div_item_button.innerHTML = `Explore ${item.name}`;

            div_item_description.appendChild(div_item_heading);
            div_item_description.appendChild(div_item_about);
            div_item_description.appendChild(div_item_button);

            if(item.order % 2 == 1)
            {
                div_item.appendChild(div_item_image);
                div_item.appendChild(div_item_description);
            }
            else
            {
                div_item.appendChild(div_item_description);
                div_item.appendChild(div_item_image);
            }

            document.querySelector('.item_type').appendChild(div_item);
            document.querySelector('.item_type').appendChild(div_shadow);
        }
        
    });

}
async function fetchData(url) {
    try {  
      let data = await fetch(url);
      let res = await data.json();
      return res; 
    } catch(err) {
        return null;
      };
  }

export {init};