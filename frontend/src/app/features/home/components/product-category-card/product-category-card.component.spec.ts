import { render } from '@testing-library/angular';
import { ProductCategoryCardComponent } from './product-category-card.component';
describe('ProductCategoryCard Component', () => {
  it('rendered successfully', async () => {
    const component = await render(ProductCategoryCardComponent);

    expect(component).toBeTruthy();
  })
})