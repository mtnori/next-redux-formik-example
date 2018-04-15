import { combineReducers } from 'redux-immutable';
import foo from './foo';
// import { reducer as notifications } from 'react-notification-system-redux';
import notifications from './notifications';

const rootReducer = combineReducers({
  foo,
  notifications
});
export default rootReducer;
