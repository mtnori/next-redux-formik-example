import React from 'react'
import BaseApp, { Container } from "next/app";
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const mapStateToProps = state => ({
  notifications: state.get('notifications')
})
const mapDispatchToProps = dispatch => ({
  show: () => dispatch(show())
})
const withNotifs = (App) =>
  connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
      static async getInitialProps(ctx) {
        if (App.getInitialProps) {
          return await App.getInitialProps(ctx);
        }
        return {};
      }
      render() {
        const { notifications } = this.props;
        return (
          <div>
            <Notifications notifications={notifications.toJS()} />
            <App {...this.props} />
          </div>
        )
      }
    }
  );
export default withNotifs;
