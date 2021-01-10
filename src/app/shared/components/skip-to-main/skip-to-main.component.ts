import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrlService } from '../../services/routerUrl.service';


@Component({
  selector: 'skip-to-main',
  templateUrl: './skip-to-main.component.html',
  styleUrls: ['./skip-to-main.component.scss']
})
export class SkipToMainComponent implements OnInit {
  skipLinkPath: string;
  constructor(private routerservice: RouterUrlService) { }

  ngOnInit() {
    this.routerservice.getPageUrl().subscribe(val=> {
      this.skipLinkPath = `${val}#main-content`;
    })
  }

}
