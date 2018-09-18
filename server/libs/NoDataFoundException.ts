class NoDataFoundException implements Error {
  public name = 'NoDataFoundException';

  constructor(public message: string) {}

  toString() {
    return this.message;
  }
}
