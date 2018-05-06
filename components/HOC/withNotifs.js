// @flow
import React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

type Props = {
  notifications: Immutable.List<Immutable.Map<string, any>>
};

const mapStateToProps = state => ({
  notifications: state.get('notifications')
});
const withNotifs = (App: any) =>
  connect(mapStateToProps)(
    class extends React.Component<Props> {
      static async getInitialProps(ctx) {
        if (App.getInitialProps) {
          const props = await App.getInitialProps(ctx);
          return props;
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
