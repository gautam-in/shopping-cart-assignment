import { PageNotFoundComponent } from './page-not-found.component';
import { render } from '@testing-library/angular';

describe('Page Not Found Component', () => {
  it('rendered successfully', async () => {
    const component = await render(PageNotFoundComponent);

    expect(component.getByText('Page Not Found')).toBeTruthy();
  })
})