import { BannerDTO } from './../../../home/models/banner-dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() imagesList: BannerDTO[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  imagesListAlt = [
    {path: 'http://ivylab.space/assets/photo-1444065707204-12decac917e8.jfif'},
    {path: 'http://ivylab.space/assets/photo-1444065707204-12decac917e8.jfif'},
    {path: 'http://ivylab.space/assets/photo-1444065707204-12decac917e8.jfif'}
  ]

}
