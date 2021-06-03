import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../models/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  @Input() categories!: ICategory[];
  constructor() {}

  ngOnInit(): void {}
}
