import { HomeComponent } from './home.component';
import { render } from '@testing-library/angular';
describe('Home Component', () => {
  it('rendered successfully', async () => {
    const component = await render(HomeComponent);

    expect(component).toBeTruthy();
  })
})