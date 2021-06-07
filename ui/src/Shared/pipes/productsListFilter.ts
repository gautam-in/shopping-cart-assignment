import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
    name: 'productListFilterPipe'
})
export class ProductListFilterPipe implements PipeTransform {

    transform(productList: Product[], categoryId: any): any {
        if (categoryId == null || !categoryId || !productList) {
            return productList;
        }
        return productList.filter(item => item.category.indexOf(categoryId) !== -1);
    }
}
