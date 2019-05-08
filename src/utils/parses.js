export const xyz = (x, y, z) => {
  if (x !== undefined && y !== undefined && z !== undefined) {
    return { x, y, z };
  }
  return { x, y };
};
