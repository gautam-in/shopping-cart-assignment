import * as React from 'react';
import { render } from '@testing-library/react';

import { ProductItem } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<ProductItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ProductItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
