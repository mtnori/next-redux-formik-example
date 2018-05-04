import React, { Component } from 'react'
import { connect } from 'react-redux';
import { success } from 'react-notification-system-redux';
import Router from 'next/router';

const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 5,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};

class About extends Component {
  // Add some delay
  static async getInitialProps () {
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    return {}
  }

  handleClick = () => {
    this.props.success(notificationOpts);
    Router.push('/loading');
  }

  render () {
    return (
      <div>
        <p>This is about Next!</p>
        <button onClick={this.handleClick}>おしらせ</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  success: (notificationOpts) => dispatch(success(notificationOpts))
})

export default connect(null, mapDispatchToProps)(About);
