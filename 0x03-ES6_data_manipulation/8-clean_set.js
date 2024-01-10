export default function cleanSet(set, startString) {
  const result = [];
  const stringLen = startString.length;
  set.forEach((element) => {
    if (startString && element.substring(0, stringLen) === startString) {
      result.push(element.substring(stringLen));
    }
  });
  return result.join('-');
}
