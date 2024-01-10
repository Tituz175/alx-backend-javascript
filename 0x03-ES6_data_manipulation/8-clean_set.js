export default function cleanSet(set, startString) {
  let result = [];
  const stringLen = startString.length;
  set.forEach((element) => {
    if (element.substring(0, stringLen) === startString && startString) {
      result.push(element.substring(stringLen));
    }
  });
  return result.join("-");
}
