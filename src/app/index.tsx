/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from 'app/pages/HomePage/index';
import { SignUp } from 'app/pages/SignUp/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { NavBar } from 'app/components/NavBar/Loadable';
import { Footer } from 'app/components/Footer/Loadable';

import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        prioritizeSeoTags
        titleTemplate="%s - Sabka Bazaar Grocery Supplies"
        defaultTitle="Sabka Bazaar Grocery Supplies"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="A Sabka Bazaar Grocery Supplies Application"
        />
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signUp" component={SignUp} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
