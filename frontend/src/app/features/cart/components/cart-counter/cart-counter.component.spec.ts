import { CartCounterComponent } from './cart-counter.component';
import { render } from '@testing-library/angular';
describe('Cart-Counter Component', () => {
  it('rendered successfully', async () => {
    const component = await render(CartCounterComponent);

    expect(component).toBeTruthy();
  })
})