import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '..';

describe('<Button  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Button label="submit" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
