import React from 'react'
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const mapStateToProps = state => ({
  notifications: state.get('notifications')
})
const mapDispatchToProps = dispatch => ({
  show: () => dispatch(show())
})
const withNotifs = (Page) =>
  connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
      static async getInitialProps() {
        if (Page.getInitialProps) {
          return await Page.getInitialProps();
        }
        return {};
      }
      render() {
        const { notifications } = this.props;
        return (
          <div>
            <p>お知らせ</p>
            <Notifications notifications={notifications.toArray()} />
            <Page {...this.props} />
          </div>
        )
      }
    }
  );
export default withNotifs;
