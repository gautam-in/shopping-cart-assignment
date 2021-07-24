import "./main.scss";
import index from './index.hbs';
import slider from './slider/slider.hbs';
import content from './content.hbs';

let path = window.location.pathname.replace('/', '');
let homeSection = document.querySelector('.home-content');
const getHomePageDetails = () => {
  homeSection.innerHTML = content();
  fetch('http://localhost:5000/banners').then((resp) => {
    resp.json().then((data) => {
        let sliderSection = document.querySelector('.carousel-banner');
        sliderSection.innerHTML = slider({
            banners : data
        });
    });
  });

  fetch('http://localhost:5000/categories').then((resp) => {
    resp.json().then((data) => {
        let categorySection = document.querySelector('.category-detalis');
        data.sort(function(a,b){
          return a.order - b.order;
        });
        let finalObj = data.filter(obj => obj.order >= 0);
        let categories = JSON.stringify(finalObj);
        localStorage.setItem('categories', categories);
        categorySection.innerHTML = index({
            categories : finalObj
        });
    });
  });
}
if(!path){
  getHomePageDetails();
}
// switch (path) {
//   case "home":

//     break;
//   case "test":

//     break;
//   default:
  
// }
