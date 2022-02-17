import bannerJson from "../../server/banners/index.get.json";
import "materialize-css/dist/js/materialize.min.js"
export function home(target) {

    let homePageMainDiv = document.createElement('div');
    homePageMainDiv.className = "homepage-main";
    
    let carouselDiv = document.createElement('div');
           
    let banners = [];
    for (const banner of bannerJson) {
        if(banner.isActive){

            let img = document.createElement('img');
            img.src = `..${banner.bannerImageUrl}`;
            img.className = "responsive-img";
            img.id = banner.id;
            img.alt = banner.bannerImageAlt;
            banners[banner.order-1] = img;
        }
    }

    for (const banner of banners) {
        if(banner){
            
            homePageMainDiv.appendChild(banner);
        }
    }
    let app_div = document.getElementById('app');
    target.innerHTML = '';
    target.appendChild(homePageMainDiv);
    
};