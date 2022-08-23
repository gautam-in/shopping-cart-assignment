import * as React from 'react';
import { render } from '@testing-library/react';

import { Categories } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
      react: { useSuspense: false },
    };
  },
}));

describe('<Categories  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Categories loading={false} items={[]} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
