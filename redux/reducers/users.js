import Immutable from 'immutable';
import * as users from '../constants/users';

const initialState = Immutable.Map({});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case users.FETCH_SUCCESS:
      console.log(action.data);
      return state.merge(action.data);
    default:
      return state;
  }
}
export default reducer;
