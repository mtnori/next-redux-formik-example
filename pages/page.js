import React from 'react';

import withRedux from 'next-redux-wrapper';
import { initStore, fooAction } from '../redux/store';
import MyForm from '../components/MyForm';

class Page extends React.Component {
  render() {
    const { foo, fooAction } = this.props;
    return (
      <div>
        <button onClick={fooAction}>Click</button>
        <p>{foo}</p>
        <MyForm foo={foo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foo: state.foo
});

const mapDispachToProps = dispatch => {
  return {
    fooAction: () => dispatch(fooAction())
  };
};

export default withRedux(initStore, mapStateToProps, mapDispachToProps)(Page);
