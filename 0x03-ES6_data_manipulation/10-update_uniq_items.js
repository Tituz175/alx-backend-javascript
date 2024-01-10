export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process. Argument is not a map.');
  }

  map.forEach((item, key) => {
    if (item === 1) {
      map.set(key, 100);
    }
  });
  return map;
}
