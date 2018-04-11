import React from 'react';

import withRedux from 'next-redux-wrapper';
import { initStore, fooAction } from '../redux/store';

class Async extends React.Component {
  static async getInitialProps({ store }) {
    setTimeout(() => store.dispatch(fooAction()), 2000);
    return {};
  }
  render() {
    const { foo } = this.props;
    return (
      <div>{foo}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  foo: state.foo
});

export default withRedux(initStore, mapStateToProps, null)(Async);
