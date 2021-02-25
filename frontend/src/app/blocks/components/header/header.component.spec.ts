import { HeaderComponent } from './header.component';
import { render } from '@testing-library/angular'

it('should render component', async () => {
  const component = await render(HeaderComponent)
}); 
