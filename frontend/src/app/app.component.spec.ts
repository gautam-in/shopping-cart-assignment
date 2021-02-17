import { render } from '@testing-library/angular'
import { AppComponent } from './app.component'

it('should render the form', async () => {
  const component = await render(AppComponent)
}) 
