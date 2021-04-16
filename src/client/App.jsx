import React from 'react';
import { renderRoutes } from 'react-router-config';
import withStyles from 'isomorphic-style-loader/withStyles';

import Layout from './components/Layout';
import styles from './assets/styles/styles.scss';

const App = ({ route }) => (
  <Layout>
    {renderRoutes(route.routes)}
  </Layout>
);

export default {
  component: withStyles(styles)(App),
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
