export default class Wrapper {
  constructor(value) {
    this._value = value;
  }

  // unit function
  static of(a) {
    return new Wrapper(a);
  }

  // bind function (the functor)
  // lifts data into the container, can be manipulated side effect free
  map(f) {
    return Wrapper.of(f(this._value));
  }

  // flattens nested layers
  join() {
    if (!(this._value instanceof Wrapper)) {
      return this;
    }
    return this._value.join();
  }

  get() {
    return this._value;
  }

  // return a textual representation of this structure
  toString() {
    return `Wrapper (${this._value})`;
  }
}
