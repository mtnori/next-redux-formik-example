// @flow
async function dummy(id) {
  return { id, name: 'testuser' };
}

export async function getUser({ id }: { id: number }) {
  const result = await dummy(id);
  return result;
}
