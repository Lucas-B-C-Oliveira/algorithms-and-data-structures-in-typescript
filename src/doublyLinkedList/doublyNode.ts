import { Node } from '@/linkedList/node'

export class DoublyNode<T> extends Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null | undefined = null,
    public prev?: T,
  ) {
    super(value, next)
  }
}
