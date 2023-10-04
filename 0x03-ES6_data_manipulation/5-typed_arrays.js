export default function createInt8TypedArray(length, postion, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  if (postion >= length) {
    throw new Error('Position outside range');
  }

  view.set([value], postion);
  return new DataView(buffer);
}
