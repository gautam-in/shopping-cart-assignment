import {ProductModel} from '../../models/product-model';

export class GetAllProducts {
  static readonly type = '[Cart] GetAllProducts';
}

export class FilterProducts {
  static readonly type = '[Cart] FilterProducts';

  constructor(public id: string) { }
}

export class AddToCart {
  static readonly type = '[Cart] AddToCart';

  constructor(public product: ProductModel) { }
}

export class ToggleCart {
  static readonly type = '[Cart] ToggleCart';
}

export class CloseCart {
  static readonly type = '[Cart] CloseCart';
}

export class AddQuantity {
  static readonly type = '[Cart] AddQuantity';

  constructor(public itemId: string) { }
}

export class DeleteQuantity {
  static readonly type = '[Cart] DeleteQuantity';

  constructor(public itemId: string) { }
}
