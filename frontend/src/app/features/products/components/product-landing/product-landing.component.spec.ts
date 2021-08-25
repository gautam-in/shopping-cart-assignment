import { render } from '@testing-library/angular';
import { ProductLandingComponent } from './product-landing.component';
describe('ProductLanding Component', () => {
  it('rendered successfully', async () => {
    const component = await render(ProductLandingComponent);

    expect(component).toBeTruthy();
  })
})