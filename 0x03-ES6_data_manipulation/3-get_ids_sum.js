export default function getStudentIdsSum(array) {
  return array.reduce((a, b) => a + b.id, 0);
}
