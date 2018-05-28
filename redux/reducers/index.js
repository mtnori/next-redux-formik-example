import { combineReducers } from 'redux-immutable';
import foo from './foo';
import users from './users';
import usersStatus from './usersStatus';
import usersErrors from './usersErrors';
// import { reducer as notifications } from 'react-notification-system-redux';
import notifications from './notifications';

const rootReducer = combineReducers({
  foo,
  users,
  usersStatus,
  usersErrors,
  notifications
});
export default rootReducer;
