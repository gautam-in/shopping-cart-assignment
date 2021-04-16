import { Category } from '../../models/category.model';
import { Product } from '../../models/products.model';
import * as ProductActionTypes from './cart.actions.types'

export class FetchCategories {
    readonly type = ProductActionTypes.FETCH_CATEGORIES;
    constructor() {

    }
}

export class AddCategories {
    readonly type = ProductActionTypes.ADD_CATEGORIES;
    constructor(public payload: Category[]) {
        this.payload = payload
    }
}

export class IncrementCartItemQuantity {
    readonly type = ProductActionTypes.INC_CART_ITEM_QTY;
    constructor(public payload: Product) {
        this.payload = payload;
    }
}

export class DecrementCartItemQuantity {
    readonly type = ProductActionTypes.DEC_CART_ITEM_QTY;
    constructor(public payload: Product) {
        this.payload = payload;
    }
}

export class ResetCartQuantity {
    readonly type = ProductActionTypes.RESET_CART;
    constructor(public payload: Product[]) {
        this.payload = payload;
    }
}