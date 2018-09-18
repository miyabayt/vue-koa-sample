class IllegalStateException implements Error {
  public name = 'IllegalStateException';

  constructor(public message: string) {}

  toString() {
    return this.message;
  }
}
