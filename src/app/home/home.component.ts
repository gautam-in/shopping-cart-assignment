import { Component, OnInit } from '@angular/core';
import { IBanner } from './../models/IBanner';
import { BannerService } from './../services/banner.service';
import { ICategory } from './../models/Icategory';
import { CategoriesService } from './../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList: IBanner[];
  categoryList:ICategory[];
  slideIndex:number = 1;
  
  constructor(private bannerService: BannerService, private categoriesService:CategoriesService) { }
  showSlides(n) {
    let i:number;
    let slides:any = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    console.log(slides)  
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
    this.slideIndex = 1;
    this.getBannerData();
    this.getCategories();
  }

  getBannerData(){
    this.bannerService.getBanner().subscribe((bannerList)=>{
    this.bannerList = bannerList;
    setTimeout (() => {
      this.showSlides(this.slideIndex);
   });
  });

    console.log(this.bannerList)
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe((categories)=>this.categoryList = categories);
  }
 
}
