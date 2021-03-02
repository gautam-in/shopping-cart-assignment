import { SliderComponent } from './slider.component';
import { render } from '@testing-library/angular';
describe('Slider Component', () => {
  it('rendered successfully', async () => {
    const component = await render(SliderComponent);

    expect(component).toBeTruthy();
  })
})