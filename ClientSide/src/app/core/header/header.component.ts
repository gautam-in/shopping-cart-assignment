import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: HomeService) {}

  ngOnInit(): void {}

  onClickCart() {
    this.cartService.show();
  }
}
