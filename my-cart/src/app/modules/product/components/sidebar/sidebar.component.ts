import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() selectedItem = new EventEmitter<string>();
  isExpanded: boolean = false;
  selectedCategory: Category = {} as Category

  @Input() set selectedCategoryId(selectedId: string) {
    this.getSelectedCategory(selectedId)
  }
  constructor() { }

  ngOnInit(): void {
  }

  getSelectedCategory(categoryId: string) {
    if (this.categories.findIndex(category => category.id === categoryId) > -1) {
      this.selectedCategory = this.categories[this.categories.findIndex(category => category.id === categoryId)]
    }
  }

  setSelectedCategory(category: Category) {
    if (JSON.stringify(this.selectedCategory) === JSON.stringify(category)) {
      category = {} as Category;
    }
    this.selectedCategory = category;
    this.selectedItem.emit(this.selectedCategory.id);
    this.openAndCloseDropdown();
  }

  openAndCloseDropdown() {
    this.isExpanded = !this.isExpanded
  }

}
