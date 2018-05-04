async function dummy(id) {
  return { id, name: 'testuser' };
}

export async function getUser({ id }) {
  const result = await dummy(id);
  return result;
}
