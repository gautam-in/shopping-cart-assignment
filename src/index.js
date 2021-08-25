import "./global.scss";
import index from './index.hbs';
import slider from './Home/carousel.hbs';
import content from './Home/content.hbs';

let path = window.location.pathname.replace('/', '');
let homeSection = document.querySelector('.home-data');
const getHomePageDetails = () => {
  homeSection.innerHTML = content();
  fetch('http://localhost:5000/banners').then((resp) => {
    resp.json().then((data) => {
        let bannerData =  data.map(item => {
          const obj = Object.assign({}, item);
          obj['order'] = item.order?item.order - 1 :item.order;
          return obj;
        });
        let sliderSection = document.querySelector('.home-wrapper');
        sliderSection.innerHTML = slider({
            banners : bannerData
        });
    });
  });

  fetch('http://localhost:5000/categories').then((resp) => {
    resp.json().then((data) => {
        let categorySection = document.querySelector('.home-details');
        data.sort(function(a,b){
          return a.order - b.order;
        });
        let categoriesData = data.filter(obj => obj.order >= 0);
        let categories = JSON.stringify(categoriesData);
        localStorage.setItem('categories', categories);
        categorySection.innerHTML = index({
            categories : categoriesData
        });
    });
  });
}
if(!path) {
  getHomePageDetails();
}
localStorage.clear();
