import { Component, ElementRef, OnInit } from '@angular/core';
import { Banner } from 'src/app/modules/shared/Interface/banner';
import { HttpService } from 'src/app/modules/shared/service/http.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  bannerItems : Banner[]= [];
  slideIndex: number = 1;
  timer : any;
 
  
  constructor(private _httpService : HttpService, private elem: ElementRef) { }

  ngOnInit(): void {
    this.getBanners();

    this.timer = setInterval(() => {
      this.changeSlide(1);
    }, 2000);
  }

  ngAfterViewChecked() {
    this.showSlides(this.slideIndex);
  }

  getBanners() {
    this._httpService.getBannerService().subscribe((res: Banner[])=>{
        this.bannerItems = res
    }, err=>{
      console.error('error in home page')
    })
  }



showSlides(slideIndex) {
  let i;
   let slides  = this.elem.nativeElement.querySelectorAll('.slides-screen');
  
  let dots = this.elem.nativeElement.querySelectorAll('.dot');
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


ngOnDestroy() {
  clearInterval(this.timer);
}


}
