import { CheckoutComponent } from './checkout.component';
import { render } from '@testing-library/angular';
describe('Checkout component', () => {
  it('rendered successfully', async () => {
    const component = await render(CheckoutComponent);

    expect(component).toBeTruthy();
  })
})