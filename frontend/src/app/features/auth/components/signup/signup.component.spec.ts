import { SignupComponent } from './signup.component';
import { render } from '@testing-library/angular';
describe('Signup component', () => {
  it('render successfully', async () => {
    const component = await render(SignupComponent);

    expect(component).toBeTruthy();
  })
})