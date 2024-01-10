export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Positioon outside range');
  }
  const int8Array = new Int8Array(length);
  int8Array.set([value], position);
  return new DataView(int8Array.buffer);
}
