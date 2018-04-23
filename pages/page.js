import React from 'react';
import withRoot from '../components/HOC'
import { fooAction } from '../redux/actions/foo';
import MyForm from '../components/MyForm';
import MyFormWithValid from '../components/MyFormWithValid';
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
        <MyFormWithValid />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foo: state.get('foo').get('foo')
});

const mapDispachToProps = dispatch => {
  return {
    fooAction: () => dispatch(fooAction())
  };
};

export default withRoot(mapStateToProps, mapDispachToProps)(Page);
