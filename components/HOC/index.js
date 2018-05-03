import { compose } from 'redux';
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper';
// import withLoading from './withLoading';
import withNotifs from './withNotifs';
import withMaterialUI from './withMaterialUI';

const withRoot = compose(
  withRedux(initStore),
  // withLoading
  withNotifs,
  withMaterialUI
);

export default withRoot;
