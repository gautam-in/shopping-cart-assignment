import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'shopping-cart-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy{
  @Input('bannerList') bannerList:any;
  interval : any;
  slideIndex:number = 1;
  constructor(private el : ElementRef) { }

  ngOnInit() {
    this.plusSlides(1);
    this.interval = setInterval(()=>{
      this.plusSlides(1);
    },4000)
  }

  showSlides() {
    let i:number;
    let slides:any = this.el.nativeElement.querySelectorAll('.mySlides');
    let dots = this.el.nativeElement.querySelectorAll(".dot");

    if (this.slideIndex > slides.length) {this.slideIndex = 1}    
    if (this.slideIndex < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides[this.slideIndex-1]){
      slides[this.slideIndex-1].style.display = "block";  
      dots[this.slideIndex-1].className += " active";
    }
   
    
  }
  currentSlide(n) {
    this.slideIndex = n;
    this.showSlides();
  }
  plusSlides(n) {
    this.slideIndex += n
    this.showSlides();
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }
}
