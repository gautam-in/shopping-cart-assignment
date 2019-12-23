import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'skip-to-main',
  templateUrl: './skip-to-main.component.html',
  styleUrls: ['./skip-to-main.component.scss']
})
export class SkipToMainComponent implements OnInit {
  skipLinkPath: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.skipLinkPath = 'main-content';
  }

}
