import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerData =[]
  slideIndex = 1;
  timer;
  categoryData = [];
  
  constructor(private _httpService : HttpService) { }

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
    this.timer = setInterval(() => {
      this.changeSlide(1);
    }, 2000);
  }

  ngAfterViewChecked() {
    this.showSlides(this.slideIndex);
  }

  getBanners() {
    this._httpService.getBannerService().subscribe((res:any)=>{
        this.bannerData = res
    }, err=>{
      console.error('error in home page')
    })
  }



showSlides(slideIndex) {
  var i;
  var slides = document.getElementsByClassName(
    'slides-screen'
  ) as HTMLCollectionOf<HTMLElement>;
  
  var dots = document.getElementsByClassName('dot');
  if (slideIndex > slides.length) {
    this.slideIndex = 1;
  }
  if (slideIndex < 1) {
    this.slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(' active', '');
  }
  if(slides.length>0){
  slides[this.slideIndex - 1].style.display = 'block';
  dots[this.slideIndex - 1].className += ' active';
  }
}


changeSlide(number) {
  this.slideIndex = this.slideIndex + number;
  this.showSlides(this.slideIndex);
}

//slideatDot method to display slide at clicked dot .
slideatDot(number) {
  this.slideIndex = number;
  this.showSlides(this.slideIndex);
}



getCategories(){
  this._httpService.getCategoriesService().subscribe(res=>{
    //console.log(res);
    this.categoryData = res
}, err=>{
  console.error(err);
})
}

ngOnDestroy() {
  clearInterval(this.timer);
}

}
