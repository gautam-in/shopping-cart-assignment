import { network,domain_port } from "../../service/service.js";
(() => {
  let currentIndex;
  const bannerEl = document.querySelector(".main-content-banner");
  
  //set current Index of iterated image
  const setCurrentIndex = (index) => {
    currentIndex = index;
  };

  //get current Index of iterated image
  const getCurrentIndex = () => {
    return currentIndex;
  };

  //create next button for sliding the image on banner.
  const createNextBtn = () => {
    const nextEl = document.createElement("button");
    nextEl.setAttribute("class", "main-content-banner-next");
    nextEl.textContent = "Next";
    return nextEl;
  };

  //create previous button for sliding the image on banner
  const createPreviousBtn = () => {
    const prevEl = document.createElement("button");
    prevEl.setAttribute("class", "main-content-banner-previous");
    prevEl.textContent = "Prev";
    return prevEl;
  };

  //create image El
  const createImgEl = (banners) => {
    const imgEl = document.createElement("img");
    imgEl.src = `${domain_port}${banners[getCurrentIndex()].bannerImageUrl}`;
    imgEl.alt = banners[getCurrentIndex()].bannerImageAlt;
    imgEl.classList.add('main-content-banner-banner-img');
    return imgEl;
  };

  //create image carousal in HomePage
  const createCarousal = async () => {
    const banners = await network('/banners',{method:'GET'});
    //checking if banner is array type and it has some content.
    if (Array.isArray(banners) && banners.length > 0) {
      //set current index as 0
      setCurrentIndex(0);
      const imgEl = createImgEl(banners);
      const nextEl = createNextBtn();
      const prevEl = createPreviousBtn();
      nextEl.onclick = () => setNextImageOnBanner(imgEl,banners,nextEl,prevEl);
      prevEl.onclick = () => setPreviousImageOnBanner(imgEl,banners,nextEl,prevEl);
      bannerEl.appendChild(imgEl);
      bannerEl.appendChild(nextEl);
      bannerEl.appendChild(prevEl);
      enableDisableBtnHandler(banners,nextEl,prevEl);
      createDottedEl(banners,bannerEl,nextEl,prevEl,imgEl);
    }
  };

  //setting next image to banner container.
  const setNextImageOnBanner = (imgEl, banners,nextEl,prevEl) => {
    //checking if current index is less that total banners
    if (getCurrentIndex() < banners.length - 1) {
        //Increment active Index
        setCurrentIndex(getCurrentIndex() + 1);
        document.querySelector('#radio'+getCurrentIndex()).checked = true;
        enableDisableBtnHandler(banners,nextEl,prevEl);
        const content = banners[getCurrentIndex()];
        imgEl.src = `${domain_port}${content.bannerImageUrl}`;
        imgEl.alt = content.bannerImageAlt;
    }
  };

  //setting next image to banner container.
  const setPreviousImageOnBanner = (imgEl, banners,nextEl,prevEl) => {
    //checking if active index is greater than 0.
    if (getCurrentIndex() > 0) {
        // Decrement active Index
        setCurrentIndex(getCurrentIndex() - 1);
        document.querySelector('#radio'+getCurrentIndex()).checked = true;
        enableDisableBtnHandler(banners,nextEl,prevEl);
        const content = banners[getCurrentIndex()];
        imgEl.src = `${domain_port}${content.bannerImageUrl}`;
        imgEl.alt = content.bannerImageAlt;
    }
  };

  //Enable or Disable next and previous button on banner container.
  const enableDisableBtnHandler = (banners,nextEl,prevEl)=>{
    //create previous btn visibility
    if(getCurrentIndex() === 0)
      prevEl.setAttribute("disabled", true);
    else
      prevEl.removeAttribute("disabled");

    //Handle next btn visibility  
    if(currentIndex === banners.length - 1)
      nextEl.setAttribute("disabled", true);
    else
     nextEl.removeAttribute("disabled");
  };

  //Create dotted button on banner container for sliding images.
  const createDottedEl = (banners,bannerEl,nextEl,prevEl,imgEl)=>{
    const margin = 30;
    for(let i = 0;i < banners.length;i++){
        const dottedEl = document.createElement('input');
        dottedEl.setAttribute('type',"radio");
        dottedEl.setAttribute('id',"radio"+i);
        dottedEl.setAttribute('name',"radio_name");
        dottedEl.setAttribute('value',"radio_value"+i);
        dottedEl.classList.add('class','main-content-banner-dotted-css');
        dottedEl.style.marginRight = -(i * margin)+"px";
        if(i ===0){
          dottedEl.checked = true;
        }else{
          dottedEl.checked = '';
        }
        
        createDottedBtnOnBanner(dottedEl,banners,nextEl,prevEl);
        bannerEl.appendChild(dottedEl);
    }
  };

  // create event on dotted btn on banner
  const createDottedBtnOnBanner = (dottedEl,banners,nextEl,prevEl)=>{
    dottedEl.onclick = ()=>{
      //set active Index
      setCurrentIndex(i);
      enableDisableBtnHandler(banners,nextEl,prevEl);
      const content = banners[getCurrentIndex()];
      imgEl.src = `${domain_port}${content.bannerImageUrl}`;
      imgEl.alt = content.bannerImageAlt;
    };
  };

  createCarousal();
})();
