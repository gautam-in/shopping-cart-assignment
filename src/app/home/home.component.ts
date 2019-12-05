import { Component, OnInit } from '@angular/core';
import { IBanner } from './../models/IBanner';
import { ICategory } from './../models/Icategory';
import { ApiService } from './../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList: IBanner[];
  categoryList:ICategory[];
  slideIndex:number = 1;
  bannerLoading: boolean=false;
  categoryLoading:boolean = false;
  
  constructor(private apiService: ApiService) { }
  showSlides(n) {
    let i:number;
    let slides:any = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
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
    this.slideIndex = 1;
    this.getBannerData();
    this.getCategories();
  }

  getBannerData(){
    this.bannerLoading = true;
    this.apiService.getBanner("banners").subscribe((bannerList)=>{
      this.bannerList = bannerList;
      setTimeout (() => {
        this.showSlides(this.slideIndex);
      });
      this.bannerLoading = false;
    });
  }

  getCategories(){
    this.categoryLoading = true;
    this.apiService.getCategories("categories").subscribe((categories)=>this.categoryList = categories);
    this.categoryLoading = false;
  }
 
}
