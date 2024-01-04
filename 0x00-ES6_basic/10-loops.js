export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const newString = `${appendString}${idx}`;
    /* eslint-disable no-param-reassign */
    array[array.indexOf(idx)] = newString;
  }

  return array;
}
