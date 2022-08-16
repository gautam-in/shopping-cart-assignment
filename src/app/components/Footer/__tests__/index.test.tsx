import * as React from 'react';
import { render } from '@testing-library/react';

import { Footer } from '..';

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

describe('<Footer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Footer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
