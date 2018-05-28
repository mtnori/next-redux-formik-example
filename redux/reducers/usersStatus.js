import Immutable from 'immutable';
import * as users from '../constants/users';

const initialState = Immutable.Map({
  loading: false,
  loaded: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case users.FETCH:
      return state.merge({
        loading: true,
        loaded: false
      });
    case users.FETCH_SUCCESS:
      return state.merge({
        loading: false,
        loaded: true
      });
    case users.FETCH_FAILURE:
      return state.merge({
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
};
export default reducer;
