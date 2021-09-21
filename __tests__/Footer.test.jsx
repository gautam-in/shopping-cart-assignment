import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';

// let FooterComponent = render(
//   <ChakraProvider>
//     <Footer />
//   </ChakraProvider>,

// );

describe('Footer component Test Unit Tests', () => {
  beforeEach(() => {
    render(
      <ChakraProvider>
        <Footer />
      </ChakraProvider>,

    );
  });

  test('Footer Component should render on screen', async () => {
    render(
      <ChakraProvider>
        <Footer />
      </ChakraProvider>,

    );
    const footerSpanElement = await screen.findByText(/Copyright 2011-2021/i, undefined, { timeout: 3000 });
    console.log(footerSpanElement);
  });
});
