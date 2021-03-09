import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { Categories } from '../../models/Categories';
import { FilterData } from '../../models/FilterData';
import { Products } from '../../models/Products';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsList: Products[];
  categoriesData: FilterData[];
  form: FormGroup;
  productsListCopy: Products[];

  constructor(
    private dataService: HomeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    const observables: [Observable<Products[]>, Observable<Categories[]>] = [
      this.dataService.getProducts(),
      this.dataService.getCategories(),
    ];

    forkJoin(observables).subscribe(([productsList, categoriesData]) => {
      this.productsList = productsList;
      this.productsListCopy = JSON.parse(JSON.stringify(this.productsList));
      this.categoriesData = this.formatFilterData(
        this.dataService.processData(categoriesData)
      );
      this.form = this.formBuilder.group({
        filters: this.addCheckboxes(),
      });
    });
  }

  get filtersFormArray() {
    return this.form.controls.filters as FormArray;
  }

  private formatFilterData(data: any[]): FilterData[] {
    return data.map((item) => {
      const mappedData: FilterData = {
        id: item.id,
        name: item.name,
      };
      return mappedData;
    });
  }

  private addCheckboxes() {
    const arr = new FormArray([]);
    this.categoriesData.forEach(() => arr.push(new FormControl(false)));

    return arr;
  }

  onCheckboxChange(index: number) {
    this.filtersFormArray.controls.forEach((control, idx) => {
      if (idx !== index) {
        control.setValue(false);
      }
    });
    const selectedOrderId: string = this.form.value.filters
      .map((checked: any, i: number) =>
        checked ? this.categoriesData[i].id : null
      )
      .find((v: any[]) => v !== null);

    if (selectedOrderId) {
      this.productsList = [
        ...this.productsListCopy.filter(
          (item) => item.category === selectedOrderId
        ),
      ];
    } else {
      this.productsList = [...this.productsListCopy];
    }
  }

  trackById(index: number, product: any): string {
    return product.id;
  }
}
