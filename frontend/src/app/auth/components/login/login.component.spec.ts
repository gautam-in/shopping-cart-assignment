import { LoginComponent } from './login.component';
import { render } from '@testing-library/angular';
describe('Login Component', () => {
  it('render component', async () => {
    const component = await render(LoginComponent);
    
    expect(component).toBeTruthy();
  })
})