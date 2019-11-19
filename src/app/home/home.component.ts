import { Component, OnInit } from '@angular/core';
import { IBanner } from './../models/IBanner';
import { BannerService } from './../services/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList: IBanner[];
  slideIndex:number = 1;
  
  constructor(private bannerService: BannerService) { }
  showSlides(n) {
    let i:number;
    let slides:any = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log(slides[i])  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  ngOnInit() {
    let slideIndex = 1;
    this.showSlides(slideIndex);
    this.getBannerData();
  }

  getBannerData(){
    this.bannerService.getBanner().subscribe((bannerList)=>this.bannerList = bannerList)
  }
 
}
