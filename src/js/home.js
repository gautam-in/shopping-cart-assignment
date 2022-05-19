import { callApi } from './utils'

const heroSliderInit = async () => {
    const slidesData = await callApi('GET', 'banners');
    const sliderWrapper = document.querySelector('#hero_section #slider');

    slidesData.forEach(slide => {
        const imgParent = document.createElement('div');
        const sliderImg = document.createElement('img');

        imgParent.className = 'offer_img';
        sliderImg.src = `../..${slide.bannerImageUrl}`;
        sliderImg.alt = slide.bannerImageAlt;
        imgParent.appendChild(sliderImg);
        sliderWrapper.appendChild(imgParent);
    });

    $('#hero_section #slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplay: true,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        infinite: true,
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        responsive: [{

            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true,
            }

        }]
    });

}

const categorySectionInit = async () => {
    const categories = await callApi('GET', 'categories');

    const categoryWrapper = document.querySelector('#category_section .container');

    categories.forEach((category, index) => {

        // Parent
        const categoryParent = document.createElement('div');
        categoryParent.className = `category_item flex_view_xs middle ${index % 2 === 0 ? 'odd' : 'even'}`;

        // Image
        const categoryImgParent = document.createElement('div');
        categoryImgParent.className = 'category_img';
        const categoryImg = document.createElement('img');
        categoryImg.src = `../..${category.imageUrl}`;
        categoryImg.alt = `../..${category.key}`;
        categoryImgParent.appendChild(categoryImg);

        // Details
        const categoryDetailParent = document.createElement('div');
        categoryDetailParent.className = 'category_detail';
        const categoryTitleElem = document.createElement('h3');
        categoryTitleElem.classList = 'category_title';
        const categoryDescrElem = document.createElement('p');
        categoryDescrElem.classList = 'descr';
        const categoryButtonElem = document.createElement('a');
        categoryButtonElem.classList = 'btn explore_btn';

        // Set URL of Button
        const pathArr  = window.location.pathname.split('/');
        pathArr[pathArr.length -1] = 'product-listing.html';
        const productPagePath = pathArr.join('/');
        categoryButtonElem.href = `${window.location.origin}${productPagePath}?category=${category.id}`

        // Append to DOM
        categoryTitleElem.appendChild(document.createTextNode(category.name));
        categoryDescrElem.appendChild(document.createTextNode(category.description));
        categoryButtonElem.appendChild(document.createTextNode(`Explore ${category.key}`));

        categoryDetailParent.appendChild(categoryTitleElem);
        categoryDetailParent.appendChild(categoryDescrElem);
        categoryDetailParent.appendChild(categoryButtonElem);

        categoryParent.appendChild(categoryImgParent);
        categoryParent.appendChild(categoryDetailParent);
        categoryWrapper.appendChild(categoryParent)
    });

}



if (document.URL.includes("home.html")) {
    heroSliderInit();
    categorySectionInit();
};