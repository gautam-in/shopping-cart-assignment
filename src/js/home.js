let currentSlideNum = 0;
let offetImagesArr;
// let offerImgArr = [];
let carouselContainerEl = document.getElementById('carousel-slider');
let carouselSlideBtnContainerEl = document.getElementById('carousel-slideButton');
let slideWrapperEl = document.getElementById('carousel-slide-wrap');


(function getProducts() {
    fetch("./../../server/banners/index.get.json")
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Something went wrong !");
        })
        .then(function (offers) {
            offetImagesArr = offers;
            offers = offers.sort((a,b)=> a.order - b.order);
            renderOffersImages(offers);
        })
        .catch(function (err) {
            console.log(err);
        });
})()

function renderOffersImages(offersImages) {
    // -----carousel banner image render--------------
    offersImages.forEach(image=> {
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('carousel-slide');
        imgDiv.setAttribute('id', `carousel-slide-${image.order}`)

        let imageEl = document.createElement('img');
        imageEl.src = `../..${image.bannerImageUrl}`;
        imageEl.alt = image.bannerImageAlt;

        imgDiv.append(imageEl);
        carouselContainerEl.append(imgDiv);
        
        //-----------carousel slide buttens-----------------
        let anchor = document.createElement('a');
        anchor.setAttribute('class', `carousel-option slide-${image.order}`);
        if(image.order === 1) {
            anchor.classList.add('active')
        }
        anchor.setAttribute('href', `#carousel-slide-${image.order}`);
        anchor.onclick = function currentSlide() {
            currentSlideNum = image.order;
            selectSlide(currentSlideNum);
        }
        carouselSlideBtnContainerEl.append(anchor);
    })
}

function currentSlide() {
    selectSlide(currentSlideNum)
}

function scrollToPrevious() {
    if(currentSlideNum <= 1) return;
    document.querySelector(`.slide-${currentSlideNum -1}`).click();
    selectSlide(currentSlideNum);
}

function scrollToNext() {
    if(currentSlideNum >= offetImagesArr.length) return;
    document.querySelector(`.slide-${currentSlideNum + 1}`).click();
    selectSlide(currentSlideNum);
}

function selectSlide(n) {
    let carouselSlideButtons = document.querySelectorAll('.carousel-option');
    carouselSlideButtons.forEach(el=> {
        el.classList.remove('active');
    })
    document.querySelector(`.slide-${n}`).classList.add('active');
}


//-----slide show auto scroll images--------------------
setTimeout(()=> {
    nextSlideAutoScroll();
}, 2000)


function nextSlideAutoScroll() {
    scrollToNext();
    setTimeout(nextSlideAutoScroll, 2000);
    if(currentSlideNum == 5) {
        setTimeout(()=> {
            if(currentSlideNum == 5) {
                currentSlideNum = 0;
            }
        }, 0)
    }
}



