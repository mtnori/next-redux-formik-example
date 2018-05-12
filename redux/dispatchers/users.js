// @flow
import { fetch, fetchSuccess } from '../actions/users';
import * as API from '../apis/users';

export default class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  async fetchUser(id: number): Promise<void> {
    await this.findUserById(id);
  }

  async findUserById(id: number): Promise<void> {
    this.dispatch(fetch(id));
    const user = await API.getUser({ id });
    this.dispatch(fetchSuccess(user));
  }
}
