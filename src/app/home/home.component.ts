import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IBanner } from './../models/IBanner';
import { ICategory } from './../models/Icategory';
import { ApiService } from './../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList: IBanner[];
  buttonConfig:any;
  btnCustomStyles:any;
  categoryList:ICategory[];
  slideIndex:number = 1;
  bannerLoading: boolean=false;
  categoryLoading:boolean = false;
  
  constructor(private apiService: ApiService, private route: Router) { }
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
    if(slides[this.slideIndex-1]){
      slides[this.slideIndex-1].style.display = "block";  
      dots[this.slideIndex-1].className += " active";
    }
   
    
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  ngOnInit() {
    this.slideIndex = 1;
    this.buttonConfig = {
      bgColor:"#d10157",
      color:"#fff",
      padding:"10px 15px",
      display:"inline-block",
      position:"static",
      width:"auto",
      border:"none",
      margin:"20px 0 0 0",
      cursor:"pointer"
    }

    this.btnCustomStyles={
      "marginTop":"20px"
    }


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
  onBtnClicked(category:any){
    this.route.navigate(['/product-list'],{ queryParams: { category: category.id } });
  }
}
