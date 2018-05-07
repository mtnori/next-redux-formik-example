// @flow
import { compose } from 'recompose';
// import { initStore } from '../../redux/store'
// import withRedux from 'next-redux-wrapper';
import withReduxSaga from '../../redux/store';
// import withReduxSaga from 'next-redux-saga';
import withLoading from './withLoading';
import withNotifs from './withNotifs';
import withMaterialUI from './withMaterialUI';

const withRoot = compose(
  // withRedux(initStore),
  withReduxSaga,
  withLoading,
  withNotifs,
  withMaterialUI
);

export default withRoot;
