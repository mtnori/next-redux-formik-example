import { compose } from 'redux';
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper';
import withLoading from './withLoading';
import withNotifs from './withNotifs';

const withRoot = (...connectArgs) => compose(
  withRedux(initStore, ...connectArgs),
  withLoading,
  withNotifs
);

export default withRoot;
