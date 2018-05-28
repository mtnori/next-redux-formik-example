// @flow
import { compose } from 'recompose';
import withRedux from 'next-redux-wrapper';
import configureStore from '../../redux/store';
import withAuth from './withAuth';
import withLoading from './withLoading';
import withNotifs from './withNotifs';
import withMaterialUI from './withMaterialUI';

const withRoot = compose(
  withRedux(configureStore),
  // withAuth,
  withLoading
  // withNotifs,
  // withMaterialUI
);

export default withRoot;
