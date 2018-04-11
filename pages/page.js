import React from 'react';

import withRedux from 'next-redux-wrapper';
import { initStore, fooAction } from '../redux/store';
import MyForm from '../components/MyForm';
import Router from 'next/router';

class Page extends React.Component {
  handleClick = () => {
    Router.push('/async');
  }
  render() {
    const { foo, fooAction } = this.props;
    return (
      <div>
        <button onClick={fooAction}>Click</button>
        <button onClick={this.handleClick}>ToAsyncPage</button>
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
