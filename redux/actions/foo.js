import * as foo from '../constants/foo';

export function fooAction() {
  return {
    type: foo.FOO,
    payload: 'test'
  };
}
