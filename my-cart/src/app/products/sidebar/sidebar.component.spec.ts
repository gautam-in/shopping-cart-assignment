import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category } from 'src/app/model/category.model';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get the emited value',()=>{
    let category : Category = {
      description: 'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.',
      enabled: true,
      id: "5b675e5e5936635728f9fc30",
      imageUrl: "/static/images/category/beverages.png",
      key: "beverages",
      name: "Beverages",
      order: 3
    }
    component.selectedItem.subscribe(selectedCategory=> expect(selectedCategory).toBe(category,'category selected'))
    component.setSelectedCategory(category);
  })
});
