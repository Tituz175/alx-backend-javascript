export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return Number(this._size);
  }

  toString() {
    return String(this._location);
  }
}
