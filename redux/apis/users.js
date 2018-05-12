// @flow
import axios from 'axios';

export async function getUser({ id }: { id: number }) {
  const res = await axios.get(`http://localhost:3030/users/${id}`);
  return res.data;
}
