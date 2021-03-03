import { MycartComponent } from './mycart.component';
import { render } from '@testing-library/angular';
describe('Mycart component', () => {
  it('rendered successfully', async () => {
    const component = await render(MycartComponent);

    expect(component).toBeTruthy();
  })
})