import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/Products.model';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() categories : Category[] = []
  @Output() selectedItem = new EventEmitter<Category>();
  selectedCategory : Category = {} as Category
  constructor() { }

  ngOnInit(): void {
  }

  setSelectedCategory(category:Category){
      this.selectedCategory =  category;
      this.selectedItem.emit(category);
  }

}
