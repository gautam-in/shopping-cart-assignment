
import HttpGateway from '../services/httpGateway';

function HomeController() {

    this.categoryList = [];
    this.banners = []
    this.name = "Rajanish"

    let httpGateway = new HttpGateway();
    let _this = this;

    httpGateway.getCategories().then(res => {
        // console.log(res)
        _this.categoryList = res;
    })
    httpGateway.getOffers().then(res => {
        //  console.log(res)
        _this.banners = res;
    })
}


function afterViewInit() {
    try {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        var slideIndex = 0;
        var i;
        getSlide()
        function getSlide() {

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(getSlide, 3000); // Change image every 2 seconds
        }
    } catch (err) {

    }
    //  console.log(slides);


}
export { HomeController, afterViewInit }