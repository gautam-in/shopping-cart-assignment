import type { ComponentType } from 'react';
import { Home, Products, SignIn, Register } from '../containers';

const DESC_SUFFIX = 'description - length <= 160 chars.';

export type MetaInfoProps = Partial<
  Readonly<{
    meta: any[];
    lang: string;
    title: string;
    defer: boolean;
    locale: string;
    description: string;
  }>
>;

export type Route = Readonly<{
  path: string;
  name: string;
  metaInfo: MetaInfoProps;
  Component: ComponentType;
}>;

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    metaInfo: {
      title: 'Home',
      description: `Home ${DESC_SUFFIX}`
    }
  },
  {
    path: '/products',
    name: 'Products',
    Component: Products,
    metaInfo: {
      title: 'products',
      description: `Home ${DESC_SUFFIX}`
    }
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    Component: SignIn,
    metaInfo: {
      title: 'Sign-In',
      description: `Signin ${DESC_SUFFIX}`
    }
  },
  {
    path: '/register',
    name: 'Register',
    Component: Register,
    metaInfo: {
      title: 'Register',
      description: `Register ${DESC_SUFFIX}`
    }
  }
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   Component: About,
  //   metaInfo: {
  //     title: 'About',
  //     description: `About ${DESC_SUFFIX}`
  //   }
  // }
];

export const getRouteMetaInfo = (name: string): MetaInfoProps => {
  const route = routes.find((x) => x.name === name);
  return route?.metaInfo ?? {};
};