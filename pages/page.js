import React from 'react';
import { connect } from "react-redux";
import { fooAction } from '../redux/actions/foo';
import { fetch } from '../redux/actions/users';
import { success } from 'react-notification-system-redux';
import Router from 'next/router';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Success',
  message: 'データの更新に成功しました',
  position: 'tr',
  autoDismiss: 5,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class Page extends React.Component {
  static getInitialProps({ store }) {
    store.dispatch(fetch(1));
    return { baz: 'baz' };
  }

  /**
   * propsが変化したらURLを変更する
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.foo !== this.props.foo) {
      this.props.success(notificationOpts);
      Router.push('/index');
    }
  }

  render() {
    const { foo, baz, users, fooAction, classes } = this.props;
    return (
      <div>
        <Button
          variant="raised"
          onClick={fooAction}
          color="primary"
          className={classes.button}>
          Click
        </Button>
        <p>{baz}</p>
        <p>{foo}</p>
        <p>{users.get('id')}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  foo: state.get('foo').get('foo'),
  users: state.get('users')
});

const mapDispachToProps = dispatch => {
  return {
    fooAction: () => dispatch(fooAction()),
    success: (notificationOpts) => dispatch(success(notificationOpts))
  };
};
export default withStyles(styles)(connect(mapStateToProps, mapDispachToProps)(Page));
