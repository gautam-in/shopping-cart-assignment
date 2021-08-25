import { LogoComponent } from './logo.component';
import { render } from '@testing-library/angular';
describe('Logo Component', () => {
  it('rendered successfully', async () => {
    const component = await render(LogoComponent);

    expect(component).toBeTruthy();
  })
});