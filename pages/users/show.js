import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import UsersActionDispatcher from '../../redux/dispatchers/users';

class Show extends React.Component {
  static async getInitialProps({ store }) {
    const actions = new UsersActionDispatcher(store.dispatch);
    await actions.fetchUser(1);
    return {};
  }

  render() {
    const { users, usersStatus, usersErrors } = this.props;
    return (
      <div>
        <Link href="/users">
          <a>here</a>
        </Link>{' '}
        {!usersStatus.get('loading') &&
          usersErrors.isEmpty() &&
          users && <p>{users.get('name')}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  users: state.get('users'),
  usersStatus: state.get('usersStatus'),
  usersErrors: state.get('usersErrors')
});

export default connect(mapStateToProps)(Show);
