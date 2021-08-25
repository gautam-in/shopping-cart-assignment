import { render } from '@testing-library/angular';
import { FooterComponent } from './footer.component';
describe('Footer component', () => {
  it('render successfully', async () => {
    const component = await render(FooterComponent);

    expect(component).toBeTruthy();
  });
})