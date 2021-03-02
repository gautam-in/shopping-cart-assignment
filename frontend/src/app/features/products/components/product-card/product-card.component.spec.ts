import { ProductCategoryCardComponent } from '../../../home/components/product-category-card/product-category-card.component';
import { render } from '@testing-library/angular';
describe('ProductCard', () => {
  it('rendered successfully', async () => {
    const component = await render(ProductCategoryCardComponent);

    expect(component).toBeTruthy();
  })
})