import Immutable from 'immutable';
import * as foo from '../constants/foo';

const initialState = Immutable.Map({
  foo: ''
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case foo.FOO:
      return state.merge({ foo: action.payload });
    default:
      return state;
  }
}
export default reducer;
