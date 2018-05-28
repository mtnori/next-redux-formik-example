import Immutable from 'immutable';
import * as users from '../constants/users';

const initialState = Immutable.Map({});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case users.FETCH_SUCCESS:
      return Immutable.Map({});
    case users.FETCH_FAILURE:
      return state.merge({
        error: action.error
      });
    default:
      return state;
  }
};
export default reducer;
