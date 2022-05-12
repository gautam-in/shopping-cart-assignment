import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { addDecorator } from '@storybook/react';
import AuthState from "../src/store/Auth/State";
import CarouselState from "../src/store/Carousel/State";
import CategoriesState from "../src/store/Categories/State";
import ProductsState from "../src/store/Products/State";
import CartState from "../src/store/Cart/State";

import '../src/index.css'


addDecorator(Story => (
    <Router>
      <AuthState>
        <CarouselState>
          <CategoriesState>
            <ProductsState>
              <CartState>
                <Story />
              </CartState>
            </ProductsState>
          </CategoriesState>
        </CarouselState>
      </AuthState>
  </Router>
));

export const customViewports = {
  "xSmall": {
    name: 'Breakpoint: X-Small',
    viewports: [575],
    styles: {
      height: '900px',
      width: '575px',
    },
  },
  small: {
    name: 'Breakpoint: Small',
    viewports: [767],
    styles: {
      height: '900px',
      width: '767px',
    },
  },
  medium: {
    name: 'Breakpoint: Medium',
    viewports: [991],
    styles: {
      height: '900px',
      width: '991px',
    },
  },
  large: {
    name: 'Breakpoint: Large',
    viewports: [1199],
    styles: {
      height: '900px',
      width: '1199px',
    },
  },
  extraLarge: {
    name: 'Breakpoint: Extra Large',
    viewports: [1399],
    styles: {
      height: '900px',
      width: '1399px',
    },
  },
  extraLarge: {
    name: 'Max Breakpoint: 1440px',
    viewports: [1440],
    styles: {
      height: '900px',
      width: '1440px',
    },
  },
  hd: {
    name: 'HD: 1920px',
    viewports: [1920],
    styles: {
      height: '900px',
      width: '1920px',
    },
  },
  iphoneSmall: {
    name: 'iPhone 6/7/8',
    viewports: [375],
    styles: {
      height: '700px',
      width: '375px',
    },
  },
  ipad: {
    name: 'iPad',
    viewports: [768],
    styles: {
      height: '1024px',
      width: '768px',
    },
  },
  ipadLarge: {
    name: 'iPad Pro',
    viewports: [1024],
    styles: {
      height: '1366px',
      width: '1024px',
    },
  }
};

export const parameters = {
  options: {
    storySort: {
      order: [
        'Sabka Bazar',
        ['Atoms', ['Foundation', 'Inputs'], 'Molecules', 'Organisms'],
      ],
    },
  },
  viewport: {
    viewports: customViewports,
  },
  layout: 'fullscreen',
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <h2>Arguments</h2>
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'light-grey',
        value: '#e7e7e7',
      },
      {
        name: 'grey50',
        value: '#f2f2f2',
      },
      {
        name: 'grey25',
        value: '#f8f8f8',
      },
    ],
  },
};