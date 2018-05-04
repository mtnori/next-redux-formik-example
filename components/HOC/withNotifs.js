import React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const mapStateToProps = state => ({
  notifications: state.get('notifications')
});
const withNotifs = App =>
  connect(mapStateToProps)(
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
        );
      }
    }
  );
export default withNotifs;
