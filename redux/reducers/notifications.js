import Immutable from 'immutable';
import {
  RNS_SHOW_NOTIFICATION,
  RNS_HIDE_NOTIFICATION,
  RNS_REMOVE_ALL_NOTIFICATIONS
} from 'react-notification-system-redux/lib/const';

const initialState = Immutable.List([]);

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case RNS_SHOW_NOTIFICATION:
      const { type, ...rest } = action;
      return state.push(Immutable.Map({ ...rest, uid: action.uid }));
    case RNS_HIDE_NOTIFICATION:
      return state.filter(notification => {
        return notification.get('uid') !== action.uid;
      });
    case RNS_REMOVE_ALL_NOTIFICATIONS:
      return state.clear();
    default:
      return state;
  }
}
export default reducer;
