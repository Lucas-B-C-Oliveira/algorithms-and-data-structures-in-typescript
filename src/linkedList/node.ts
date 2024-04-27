export class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null | undefined = null,
  ) {}

  toString(callback: (value: any) => void) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
