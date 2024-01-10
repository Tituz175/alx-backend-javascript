export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const counter = (weakMap.get(endpoint) || 0) + 1;
  if (counter >= 5) throw new Error('Endpoint load is hight');
  weakMap.set(endpoint, counter);
}
