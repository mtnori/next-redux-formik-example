import { combineReducers } from 'redux-immutable';
import foo from './foo';
import users from './users';
// import { reducer as notifications } from 'react-notification-system-redux';
import notifications from './notifications';

const rootReducer = combineReducers({
  foo,
  users,
  notifications
});
export default rootReducer;
